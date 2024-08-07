import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get('PORT');

  app.useStaticAssets(join(__dirname, '..', 'public')); // html, css, js
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // ejs
  app.setViewEngine('ejs');
  await app.listen(port);
}
bootstrap();
