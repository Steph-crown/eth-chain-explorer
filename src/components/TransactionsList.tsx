"use client";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import { ITransaction } from "@/interfaces";
import React, { Context, useContext } from "react";
import EmptyState from "./EmptyState";
import Loader from "./Loader";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  const { transactions, loadingTransaction, filteredTags } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  const filterTransactions = (transactions: ITransaction[]) => {
    if (filteredTags.length === 0) return transactions;

    return transactions.filter((tx) =>
      tx.tags.some((tag) => filteredTags.includes(tag))
    );
  };

  return (
    <div className="txs-list">
      {loadingTransaction ? <Loader /> : null}

      {filterTransactions(transactions).map((tx, id) => (
        <TransactionCard key={tx.addr + id} id={id} {...tx} />
      ))}

      {filterTransactions(transactions).length === 0 ? <EmptyState /> : null}
    </div>
  );
};

export default TransactionsList;
