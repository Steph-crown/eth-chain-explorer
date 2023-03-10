"use client";

import { useSearchWalletInfo } from "@/hooks";
import React from "react";

const Search = () => {
  const { addrInputValue, handleaddrInputValue, search } =
    useSearchWalletInfo();

  return (
    <form className="search-form" onSubmit={search}>
      <input
        type="text"
        placeholder="Enter Ethereum wallet address"
        value={addrInputValue}
        onChange={handleaddrInputValue}
      />
      <button className="btn">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
