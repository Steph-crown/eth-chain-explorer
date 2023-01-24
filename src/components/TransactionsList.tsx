import { ITransaction } from "@/interfaces";
import React, { FC } from "react";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
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

const transactions: ITransaction[] = [
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: [
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "Mad Realities",
      "Crowd Fund",
      "NFT",
    ],
  },
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: ["Mad Realities", "Crowd Fund", "NFT"],
  },
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: ["Mad Realities", "Crowd Fund", "NFT"],
  },
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: ["Mad Realities", "Crowd Fund", "NFT"],
  },
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: ["Mad Realities", "Crowd Fund", "NFT"],
  },
  {
    addr: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    bal: 0,
    lastTxTime: "223 Days, 12 hrs ago",
    lastTxHash: "0x1c08fB789401F6c6695255AEE152d25098ce527f",
    tags: ["Mad Realities", "Crowd Fund", "NFT"],
  },
];
