import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// Consumer
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // API (Restful)
  @Render('home')
  handleHomePage() {
    const message = this.appService.getHello();

    return {
      message: message,
    };
  }
}
