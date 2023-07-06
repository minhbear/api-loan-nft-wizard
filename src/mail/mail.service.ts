import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendMailDonateSuccess(campaign = 'campaign', amount = 0) {
    await this.mailerService.sendMail({
      to: 'billcipher310@gmail.com',
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './donate-success', // `.hbs` extension is appended automatically
      context: {
        campaign,
        amount,
      },
    });
  }
  async sendMailNotifyCampaignTransfer(
    campaign = 'campaign',
    amount = 0,
    recipient = 'recipient',
  ) {
    await this.mailerService.sendMail({
      to: 'billcipher310@gmail.com',
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './campaign-transfer', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        campaign,
        amount,
        recipient,
      },
    });
  }
}
