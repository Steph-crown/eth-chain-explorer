"use client";

import { ITransaction } from "@/interfaces";
import { date, store } from "@/services";
import React, { Context, FC, useContext } from "react";
import TagList from "./TagList";
import "@github/relative-time-element";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";

const TransactionCard: FC<ITransaction> = ({
  addr,
  bal,
  lastTxTime,
  lastTxHash,
  tags,
  dateChecked,
  id,
}) => {
  const relativeDateChecked = date.relativeTime(dateChecked);
  const relativeTransactionTime = date.relativeTime(lastTxTime);
  const { setTransactions } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );
  console.log("ayaaaa", id);

  const addTagToTransaction = (tag: string) => {
    console.log("ayaaaa", id);

    setTransactions((prev) => {
      const updatedTxs = prev.map((tx, index) => {
        if (index === id) {
          return { ...tx, tags: [...tx.tags, tag] };
        }
        return tx;
      });

      store.addTransactions(updatedTxs);

      return updatedTxs;
    });
  };

  return (
    <div className="tx-card">
      <a
        href={`https://etherscan.io/address/${addr}`}
        target="_blank"
        rel="noreferrer"
      >
        Address: {addr}
      </a>

      <div className="tx-flex">
        <p className="muted">Balance: </p>
        <p className="right">{bal} Ether</p>
      </div>

      <div className="tx-flex">
        <p className="muted">Last Transaction: </p>
        <p className="right">{relativeTransactionTime}</p>
      </div>
      <a
        href={`https://etherscan.io/tx/${lastTxHash}`}
        className="accent"
        target="_blank"
        rel="noreferrer"
      >
        {lastTxHash}
      </a>

      <div className="tx-flex">
        <p className="muted">Time of Check: </p>
        <p className="right">{relativeDateChecked}</p>
      </div>

      <div className="tx-flex">
        <TagList
          tags={tags}
          tagBg="darker"
          editable={true}
          addTagToTransaction={addTagToTransaction}
        />
      </div>
    </div>
  );
};

export default TransactionCard;
