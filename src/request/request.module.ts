import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { HeliusModule } from 'src/helius/helius.module';

@Module({
  imports: [HeliusModule],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
