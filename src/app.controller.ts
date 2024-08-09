import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
// Consumer
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get() // API (Restful)
  @Render('home')
  handleHomePage() {
    console.log('>>>Check port: ', this.configService.get<string>('PORT'));
    const message = this.appService.getHello();

    return {
      message: message,
    };
  }
}
