import { Filter, Heading, Search, TransactionsList } from "@/components";
import { TransactionsProvider } from "@/providers";
import "@github/relative-time-element";

export default function Home() {
  return (
    <main>
      <TransactionsProvider>
        <Heading />
        <Search />
        <Filter />
        <TransactionsList />
      </TransactionsProvider>
    </main>
  );
}
