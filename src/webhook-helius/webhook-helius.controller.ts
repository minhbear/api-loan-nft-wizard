import { Body, Controller, Post } from '@nestjs/common';
import { WebhookHeliusService } from './webhook-helius.service';
import { TransactionLogWebhook } from 'src/common/types';

@Controller('webhook-helius')
export class WebhookHeliusController {
  constructor(private readonly webhookHeliusService: WebhookHeliusService) {}

  @Post('/')
  async webhook(@Body() body: TransactionLogWebhook[]) {
    await this.webhookHeliusService.extractTransaction(body);
    return {};
  }
}
