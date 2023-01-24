import { Filter, Search } from "@/components";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Ethereum Blockchain Explorer</h1>
      </header>
      <Search />
      <Filter />
    </main>
  );
}
