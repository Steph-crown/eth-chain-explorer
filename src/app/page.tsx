import { Filter, Search, TransactionsList } from "@/components";
import { TransactionsProvider } from "@/providers";
import "@github/relative-time-element";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Ethereum Blockchain Explorer</h1>
      </header>
      <TransactionsProvider>
        <Search />
        <Filter />
        <TransactionsList />
      </TransactionsProvider>
    </main>
  );
}
