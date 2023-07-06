import { Injectable } from '@nestjs/common';
import { Connection, VersionedTransactionResponse } from '@solana/web3.js';
import { DEVNET_RPC_URL, ELUSIV_KEY } from 'src/common/environments';
import { TransactionLogWebhook } from 'src/common/types';

@Injectable()
export class WebhookHeliusService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(DEVNET_RPC_URL);
  }

  async extractTransaction(
    transaction: TransactionLogWebhook[],
  ): Promise<void> {
    const tx = transaction[0];

    const txLog: VersionedTransactionResponse =
      await this.connection.getTransaction(tx.signature, {
        commitment: 'confirmed',
        maxSupportedTransactionVersion: 1,
      });

    if (!this.checkIsTransactionSendByElusiv(txLog.meta.logMessages)) return;

    // SEND INFORMATION BY EMAIL
  }

  checkIsTransactionSendByElusiv(logMessage: string[]): boolean {
    let isTransactionSendByElusiv = false;
    for (const message of logMessage) {
      if (message.includes(ELUSIV_KEY)) {
        isTransactionSendByElusiv = true;
        return isTransactionSendByElusiv;
      }
    }

    return isTransactionSendByElusiv;
  }
}
