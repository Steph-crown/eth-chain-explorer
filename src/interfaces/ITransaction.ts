interface ITransaction {
  addr: string;
  bal: number;
  lastTxTime: Date;
  lastTxHash: string;
  tags: string[];
  dateChecked: Date;
  id?: number;
}

export default ITransaction;
