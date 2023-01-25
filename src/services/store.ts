import { ITransaction } from "@/interfaces";
import { STORE_KEY } from "@/constants";

const store = {
  fetchTransactions: () => {
    const txFromLocalStorage = localStorage.getItem(STORE_KEY as string);

    if (txFromLocalStorage) {
      return JSON.parse(txFromLocalStorage);
    }
    return [];
  },

  addTransactions: (txs: ITransaction[]) => {
    const stringifyTxs = JSON.stringify(txs);
    localStorage.setItem(STORE_KEY as string, stringifyTxs);
  },
};

export default store;
