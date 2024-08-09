import { Injectable } from '@nestjs/common';

@Injectable() // Injector created by framework
// Provider
export class AppService {
  getHello(): string {
    return 'Hello World! & Happy Learning!';
  }
}
