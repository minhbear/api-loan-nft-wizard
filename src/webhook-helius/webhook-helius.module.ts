import { Module } from '@nestjs/common';
import { WebhookHeliusService } from './webhook-helius.service';
import { WebhookHeliusController } from './webhook-helius.controller';

@Module({
  providers: [WebhookHeliusService],
  controllers: [WebhookHeliusController],
})
export class WebhookHeliusModule {}
