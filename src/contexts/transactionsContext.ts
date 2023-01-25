import { ITransaction } from "@/interfaces";
import { createContext, Dispatch, SetStateAction } from "react";

const TransactionsContext = createContext<ITransactionsContext | null>(null);

export default TransactionsContext;

export interface ITransactionsContext {
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}
