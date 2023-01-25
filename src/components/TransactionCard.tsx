import { ITransaction } from "@/interfaces";
import { date } from "@/services";
import React, { FC } from "react";
import TagList from "./TagList";
import "@github/relative-time-element";

const TransactionCard: FC<ITransaction> = ({
  addr,
  bal,
  lastTxTime,
  lastTxHash,
  tags,
  dateChecked,
}) => {
  const relativeDateChecked = date.relativeTime(dateChecked);
  const relativeTransactionTime = date.relativeTime(lastTxTime);

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
        <TagList tags={tags} tagBg="darker" editable={true} />
      </div>
    </div>
  );
};

export default TransactionCard;
