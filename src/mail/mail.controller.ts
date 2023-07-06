import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) { }
  @Get('donate-success')
  async sendMailDonateSuccess(): Promise<void> {
    return this.mailService.sendMailDonateSuccess('TEST', 1000);
  }
  @Get('notify-campaign-transfer')
  async sendMailNotifyCampaignTransfer(): Promise<void> {
    return this.mailService.sendMailNotifyCampaignTransfer(
      'TEST',
      1000,
      'TESTRECIPIENT',
    );
  }
}
