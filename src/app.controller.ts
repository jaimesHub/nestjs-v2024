import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController { // Consumer
  // Way 1: Constructor Injection
  constructor(private readonly appService: AppService) {}

  // Way 2: Constructor Injection
  // private readonly appService: AppService;

  // constructor(appService: AppService) {
  //   this.appService = appService;
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
