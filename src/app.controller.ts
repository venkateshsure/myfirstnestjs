import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHell(): string {
    return this.appService.getHello();
  }

  @Post()
  postHell(): string {
    return this.appService.postHello();
  }
}
