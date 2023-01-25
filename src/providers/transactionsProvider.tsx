"use client";

import { ITransaction } from "@/interfaces";
import { FC, ReactNode, useState } from "react";
import { TransactionsContext } from "../contexts";

const TransactionsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [error, setError] = useState("");

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        loadingTransaction,
        setLoadingTransaction,
        error,
        setError,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
