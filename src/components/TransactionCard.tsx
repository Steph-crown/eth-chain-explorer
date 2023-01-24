import { ITransaction } from "@/interfaces";
import React, { FC } from "react";
import TagList from "./TagList";

const TransactionCard: FC<ITransaction> = ({
  addr,
  bal,
  lastTxTime,
  lastTxHash,
  tags,
}) => {
  return (
    <div className="tx-card">
      <a href="">Address: {addr}</a>

      <div className="tx-flex">
        <p className="muted">Balance: </p>
        <p className="right">{bal} Ether</p>
      </div>

      <div className="tx-flex">
        <p className="muted">Last Transaction: </p>
        <p className="right">{lastTxTime}</p>
      </div>
      <a href="" className="accent">
        {lastTxHash}
      </a>

      <div className="tx-flex">
        <TagList tags={tags} tagBg="darker" editable={true} />
      </div>
    </div>
  );
};

export default TransactionCard;
