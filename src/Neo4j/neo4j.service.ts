import { Injectable, Inject } from '@nestjs/common';
import * as v1 from 'neo4j-driver';
@Injectable()
export class Neo4jService {
 constructor(@Inject("Neo4j") private readonly neo4j: v1.Driver) {}

async findAll(): Promise<any> {
 return this.neo4j.session().run('MATCH (n:school) RETURN n LIMIT 5');
 }
 
 //insert data into the school
  insertData(name: string,phno:number,place:string)
  {
    return this.neo4j.session().run('MATCH (p:school) MERGE (n:school {name:{nameParam},phno:{phnoParam},place:{placeParam}}) RETURN n ',{nameParam:name,phnoParam:phno,placeParam:place})
  }

  //create student node
  createStud(name:string,standard:string,place:string)
  {
    return this.neo4j.session().run(`MATCH (p:student) MERGE (n:student{name:{nameParam},standard:{stdParam},place:{placeParam}}) RETURN n`, {nameParam:name,stdParam:standard,placeParam:place})
  }
//add relation
  addRelation(name:string,rname:string)
  {
    return this.neo4j.session().run(`MATCH (a:school{name:{nameParam}}), (b:student{name:{namesParam}}) MERGE(a)-[r:student_off]-(b) RETURN a,b`, {nameParam:name,namesParam:rname})
  }
//get data by id in school
  getByIdData(id:string)
  {
      return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} RETURN n`)
  }

  //update data in school
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

//delete data from the school

  deleteData(id: string)
  {
    return this.neo4j.session().run(`MATCH (n:school) WHERE id(n)=${id} DELETE n`)
  }
}