"use client";

import { ITransaction } from "@/interfaces";
import { FC, ReactNode, useState } from "react";
import { TransactionsContext } from "../contexts";

const TransactionsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
