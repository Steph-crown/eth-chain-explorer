"use client";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import React, { Context, useContext } from "react";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  const { transactions } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  return (
    <div className="txs-list">
      {transactions.map((tx, id) => (
        <TransactionCard key={tx.addr + id} {...tx} />
      ))}
    </div>
  );
};

export default TransactionsList;
