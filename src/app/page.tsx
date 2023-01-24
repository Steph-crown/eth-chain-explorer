import { Filter, Search, TransactionsList } from "@/components";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Ethereum Blockchain Explorer</h1>
      </header>
      <Search />
      <Filter />
      <TransactionsList />
    </main>
  );
}
