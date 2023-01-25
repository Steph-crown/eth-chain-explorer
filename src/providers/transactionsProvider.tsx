"use client";

import { ITransaction } from "@/interfaces";
import { store } from "@/services";
import { FC, ReactNode, useEffect, useState } from "react";
import { TransactionsContext } from "../contexts";

const TransactionsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [error, setError] = useState("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  useEffect(() => {
    const txsFromStore = store.fetchTransactions();
    setTransactions(txsFromStore);
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        loadingTransaction,
        setLoadingTransaction,
        error,
        setError,
        filteredTags,
        setFilteredTags,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
