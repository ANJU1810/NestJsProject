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
@Post()
addData(
    @Body('name') schoolName: string,
    @Body('phno') schoolPhno: number,
    @Body('place') schoolPlace: string
)
{
    return this.retriveNodes.insertData(schoolName,schoolPhno,schoolPlace);
}
@Get(':id')
getById(@Param('id') id:string)
{
    return this.retriveNodes.getByIdData(id);
}
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
@Delete(':id')
removeData(@Param('id') id : string)
{
    return this.retriveNodes.deleteData(id);
}
}
