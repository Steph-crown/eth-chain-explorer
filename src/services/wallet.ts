import { ETHERSCAN_TOKEN } from "@/constants";
import date from "./date";

const wallet = {
  getBalance: async (addr: string) => {
    const res = await fetch(
      `https://api.etherscan.io/api?module=account&action=balance&address=${addr}&tag=latest&apikey=${ETHERSCAN_TOKEN}`
    );
    const resInJson = await res.json();

    return resInJson?.result;
  },

  getLastTx: async (
    addr: string
  ): Promise<{
    lastTransactionHash: string;
    lastTransactionTime: Date;
  }> => {
    const res = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${addr}&page=1&offset=1&sort=desc&apikey=${ETHERSCAN_TOKEN}`
    );
    const resInJson = await res.json();
    console.log("res in json", resInJson?.result);
    const lastTransaction = resInJson?.result ? resInJson?.result[0] : {};
    const lastTransactionTime = date.fromTimeStamp(lastTransaction?.timeStamp);
    const lastTransactionHash = lastTransaction.hash;

    return { lastTransactionHash, lastTransactionTime };

    // return resInJson?.result;
  },
};

export default wallet;
