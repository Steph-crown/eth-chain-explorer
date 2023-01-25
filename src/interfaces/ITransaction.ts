interface ITransaction {
  addr: string;
  bal: number;
  lastTxTime: Date;
  lastTxHash: string;
  tags: string[];
  dateChecked: Date;
}

export default ITransaction;
