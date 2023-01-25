import { ITransaction } from "@/interfaces";
import { createContext, Dispatch, SetStateAction } from "react";

const TransactionsContext = createContext<ITransactionsContext | null>(null);

export default TransactionsContext;

export interface ITransactionsContext {
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
  loadingTransaction: boolean;
  setLoadingTransaction: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  filteredTags: string[];
  setFilteredTags: Dispatch<SetStateAction<string[]>>;
}
