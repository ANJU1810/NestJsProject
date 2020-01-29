import { Injectable, Inject } from '@nestjs/common';
import * as v1 from 'neo4j-driver';
@Injectable()
export class Neo4jService {
 constructor(@Inject("Neo4j") private readonly neo4j: v1.Driver) {}

async findAll(): Promise<any> {
 return this.neo4j.session().run('MATCH (n:school) RETURN n LIMIT 5');
 }
  insertData(name: string,phno:number,place:string)
  {
    return this.neo4j.session().run('MATCH (p:school) MERGE (n:school {name:{nameParam},phno:{phnoParam},place:{placeParam}}) RETURN n ',{nameParam:name,phnoParam:phno,placeParam:place})
  }
  getByIdData(id:string)
  {
      return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} RETURN n`)
  }
  changeData(id:string,name:string,phno:number,place:string)
  {
      if(name){
        return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} SET n.name={nameParam} RETURN n`,{nameParam:name})
      }
     
    if(phno)
    {
        return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} SET n.phno={phnoParam} RETURN n`,{phnoParam:phno})
    }
    if(place)
    {
        return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} SET n.place={placeParam} RETURN n`,{placeParam:place})
    }
  }
  deleteData(id: string)
  {
    return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} DELETE n`)
  }
}