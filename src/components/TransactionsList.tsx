"use client";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import { ITransaction } from "@/interfaces";
import React, { Context, FC, useContext } from "react";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  const { transactions } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  console.log("the tx context", transactions);

  return (
    <div className="txs-list">
      {transactions.map((tx, id) => (
        <TransactionCard key={tx.addr + id} {...tx} />
      ))}
    </div>
  );
};

export default TransactionsList;

// interface IProps {
//   transactions: ITransaction[];
// }

// const transactions: ITransaction[] = [
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     dateChecked: "2 seconds ago",
//     tags: [
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "Mad Realities",
//       "Crowd Fund",
//       "NFT",
//     ],
//   },
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     tags: ["Mad Realities", "Crowd Fund", "NFT"],
//     dateChecked: "2 seconds ago",
//   },
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     dateChecked: "2 seconds ago",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     tags: ["Mad Realities", "Crowd Fund", "NFT"],
//   },
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     dateChecked: "2 seconds ago",

//     tags: ["Mad Realities", "Crowd Fund", "NFT"],
//   },
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     tags: ["Mad Realities", "Crowd Fund", "NFT"],
//     dateChecked: "2 seconds ago",
//   },
//   {
//     addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     bal: 0,
//     lastTxTime: "223 Days, 12 hrs ago",
//     lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
//     tags: ["Mad Realities", "Crowd Fund", "NFT"],
//     dateChecked: "2 seconds ago",
//   },
// ];
