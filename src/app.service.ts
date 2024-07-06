import { Injectable } from '@nestjs/common';

@Injectable() // Injector created by framework
export class AppService { // Provider
  getHello(): string {
    return 'Hello World! & Happy Learning!';
  }
}
