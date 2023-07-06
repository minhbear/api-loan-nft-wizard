import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookHeliusController } from './webhook-helius/webhook-helius.controller';
import { WebhookHeliusModule } from './webhook-helius/webhook-helius.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [WebhookHeliusModule, MailModule],
  controllers: [AppController, WebhookHeliusController],
  providers: [AppService],
})
export class AppModule {}
