interface TransactionLogWebhook {
  accountData: object[];
  description: '';
  events: object;
  fee: number;
  feePayer: string;
  instructions: object[];
  nativeTransfers: any[];
  signature: string;
  slot: number;
  source: string;
  timestamp: number;
  tokenTransfers: any[];
  transactionError: any;
  type: string;
}

export { TransactionLogWebhook };
