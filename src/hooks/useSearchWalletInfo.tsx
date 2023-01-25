"use client";

import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import { ITransaction } from "@/interfaces";
import { wallet } from "@/services";
import React, {
  ChangeEvent,
  Context,
  FormEvent,
  useContext,
  useState,
} from "react";
import { toast } from "react-hot-toast";

const useSearchWalletInfo = () => {
  const [addrInputValue, setAddrInputValue] = useState("");
  const [searching, setSearching] = useState(false);

  const { setTransactions, setError, setLoadingTransaction } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  const handleaddrInputValue = (ev: ChangeEvent<HTMLInputElement>) => {
    setAddrInputValue(ev.target.value.trim());
  };

  const clearaddrInputValue = () => {
    setAddrInputValue("");
  };

  const search = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const val = addrInputValue.trim();

    // no tag text
    if (!val) {
      toast.error("Please enter a tag");
      return;
    }

    try {
      setLoadingTransaction(true);
      const walletBalanceInWei = await wallet.getBalance(addrInputValue);
      const walletBalanceInEth = walletBalanceInWei / 1e18;

      const { lastTransactionHash, lastTransactionTime } =
        await wallet.getLastTx(addrInputValue);

      const params: ITransaction = {
        addr: addrInputValue,
        bal: walletBalanceInEth,
        lastTxHash: lastTransactionHash,
        lastTxTime: lastTransactionTime,
        tags: [],
        dateChecked: new Date(),
      };

      setTransactions((prev) => [...prev, params]);
      clearaddrInputValue();
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
        console.log("err.message", err.message);
      }
    } finally {
      setLoadingTransaction(false);
    }
  };

  return {
    addrInputValue,
    handleaddrInputValue,
    search,
  };
};

export default useSearchWalletInfo;

interface ErrorWithMessage {
  message: string;
}
