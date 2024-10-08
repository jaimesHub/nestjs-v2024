import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TransformInterceptor } from './core/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get('PORT');

  // global guard here
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector)); // GUARD jwt: make sure you have to input access_token into some protected route
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  app.useStaticAssets(join(__dirname, '..', 'public')); // html, css, js
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // ejs
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe());

  // config cors
  app.enableCors({
    "origin": "*",
    // "origin": "http://localhost:3001", // cho phép nơi nào truy cập vào server's resource
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  });

  //config versioning
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    // prefix: : 'api/v',
    defaultVersion: ['1', '2'] //v1, v2
  });


  await app.listen(port);
  // await app.listen(configService.get<string>('PORT'));
}
bootstrap();
