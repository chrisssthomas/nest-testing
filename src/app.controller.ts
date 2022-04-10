import { AppService } from './app.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  findAll() {
    return this.appService.getUsers();
  }

  @Post()
  create(@Body() body) {}
}
