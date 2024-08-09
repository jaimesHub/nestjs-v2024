import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// Consumer
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // API (Restful)
  @Render('home')
  getHello() {
    // return this.appService.getHello();
  }
}
