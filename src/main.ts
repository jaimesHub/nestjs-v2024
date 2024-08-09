import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public')); // html, css, js
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // ejs
  app.setViewEngine('ejs');
  await app.listen(process.env.PORT);
}
bootstrap();
