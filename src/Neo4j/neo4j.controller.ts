import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import {Neo4jService} from './neo4j.service';
@Controller('neo4j')
export class Neo4jController {
    constructor (private readonly retriveNodes: Neo4jService){}
@Get()
 async findAll() {
 console.log('Get all Node Labels') ;
 return this.retriveNodes.findAll();
 }

//post request for adding data to the school

@Post()
addData(
    @Body('name') schoolName: string,
    @Body('phno') schoolPhno: number,
    @Body('place') schoolPlace: string
)
{
    return this.retriveNodes.insertData(schoolName,schoolPhno,schoolPlace);
}
//post request for creating new student node

@Post('create')
createNewData(
    @Body('name') studName:string,
    @Body('standard') studStd:string,
    @Body('place') studPlace:string,
    )
{
    return this.retriveNodes.createStud(studName,studStd,studPlace);
}

//relationship request

@Post('relation')
relationAdd(
    @Body('name') schoolName: string,
    @Body('names') studName: string,
   
)
{
    return this.retriveNodes.addRelation(schoolName,studName)
}

//get by id ...school

@Get(':id')
getById(@Param('id') id:string)
{
    return this.retriveNodes.getByIdData(id);
}

//update data ...school

@Patch(':id')
updateData(
    @Param('id') schoolId: string,
    @Body('name') schoolName: string,
    @Body('phno') schoolPhno: number,
    @Body('place') schoolPlace: string
)
{
    return this.retriveNodes.changeData(schoolId,schoolName,schoolPhno,schoolPlace);
}

//delete ...school

@Delete(':id')
removeData(@Param('id') id : string)
{
    return this.retriveNodes.deleteData(id);
}
}
