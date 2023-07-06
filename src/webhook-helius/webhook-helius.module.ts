import { Module } from '@nestjs/common';
import { WebhookHeliusService } from './webhook-helius.service';

@Module({
  providers: [WebhookHeliusService],
})
export class WebhookHeliusModule {}
