import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jController } from './neo4j/neo4j.controller';
import { Neo4jService } from './neo4j/neo4j.service';
import { Neo4jModule } from './neo4j/neo4j.module';
import { NeoController } from './neo/neo.controller';
import { NeoService } from './neo/neo.service';

@Module({
  imports: [Neo4jModule],
  controllers: [AppController, Neo4jController, NeoController],
  providers: [AppService, Neo4jService, NeoService],
})
export class AppModule {}
