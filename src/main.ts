import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exceptions/exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT, APP_NAME } from './common/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription('sever for notification using webhook helius')
    .setVersion('1.0')
    .addTag('Webhook Helius')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`
    Server run at: http://localhost:${APP_PORT}\n
    API document: http://localhost:${APP_PORT}/api          
  `);
}
bootstrap();
