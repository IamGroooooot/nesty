import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // business logic goes to a service
    return this.appService.getHello();
  }

  // take url and calls functions
  // we dont have to setup router (like nodejs)
  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }

  // post decorator
  @Post('/post')
  postHello(): string {
    return 'Hello';
  }
}
