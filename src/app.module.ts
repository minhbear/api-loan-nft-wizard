import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookHeliusModule } from './webhook-helius/webhook-helius.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [WebhookHeliusModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
