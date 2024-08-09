import { Injectable } from '@nestjs/common';

@Injectable() // Injector created by framework
// Provider
export class AppService {
  getHello(): string {
    // model: code here
    return 'Hello World! & Happy Learning!';
  }
}
