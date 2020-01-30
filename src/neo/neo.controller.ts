import { Controller, Post, Body } from '@nestjs/common';
import { NeoService } from './neo.service';
import { from } from 'rxjs';
@Controller('neo')
export class NeoController {
    constructor (private readonly retriveNodes: NeoService){}
   
}
