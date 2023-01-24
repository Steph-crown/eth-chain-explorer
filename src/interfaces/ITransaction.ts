interface ITransaction {
  addr: string;
  bal: number;
  lastTxTime: string;
  lastTxHash: string;
  tags: string[];
}

export default ITransaction;
