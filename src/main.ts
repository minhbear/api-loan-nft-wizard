import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'ngrok';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, async () => {
    console.log('Sever running');
  });
}
bootstrap();
