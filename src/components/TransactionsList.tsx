"use client";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import React, { Context, useContext } from "react";
import Loader from "./Loader";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  const { transactions, loadingTransaction } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  return (
    <div className="txs-list">
      {loadingTransaction ? <Loader /> : null}
      {transactions.map((tx, id) => (
        <TransactionCard key={tx.addr + id} id={id} {...tx} />
      ))}
    </div>
  );
};

export default TransactionsList;
