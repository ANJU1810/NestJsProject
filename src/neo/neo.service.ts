import { Injectable, Inject } from '@nestjs/common';
import * as v1 from 'neo4j-driver';
@Injectable()
export class NeoService {
    constructor(@Inject("Neo4j") private readonly neo4j: v1.Driver) {}
   
}
