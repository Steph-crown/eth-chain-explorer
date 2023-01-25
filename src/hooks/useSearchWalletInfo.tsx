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
  // const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const { transactions, setTransactions } = useContext(
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

    const walletBalanceInWei = await wallet.getBalance(addrInputValue);
    const walletBalanceInEth = walletBalanceInWei / 1e18;

    const { lastTransactionHash, lastTransactionTime } = await wallet.getLastTx(
      addrInputValue
    );

    const params: ITransaction = {
      addr: addrInputValue,
      bal: walletBalanceInEth,
      lastTxHash: lastTransactionHash,
      lastTxTime: lastTransactionTime,
      tags: [],
      dateChecked: new Date(),
    };

    setTransactions((prev) => [...prev, params]);

    // // tag already in `filteredTags`
    // if (filteredTags.some((tag) => tag === val)) {
    //   toast.error("Filter already active");
    //   return;
    // }

    // setFilteredTags((prev) => [...prev, val]);
    clearaddrInputValue();
  };

  return {
    addrInputValue,
    handleaddrInputValue,
    search,
  };
};

export default useSearchWalletInfo;
