"use client";
import { TransactionsContext } from "@/contexts";
import { ITransactionsContext } from "@/contexts/transactionsContext";
import { useTagFilter } from "@/hooks";
import React, { Context, useContext } from "react";
import TagList from "./TagList";

const Filter = () => {
  const {
    tagInputValue,
    handleTagInputValue,
    // filteredTags,
    addFilterTag,
    deleteTag,
  } = useTagFilter();

  const { filteredTags } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );

  return (
    <div>
      <form className="search-form filter-form" onSubmit={addFilterTag}>
        <input
          type="text"
          placeholder="Enter a tag to filter."
          onChange={handleTagInputValue}
          value={tagInputValue}
        />
        <button className="btn">
          <FilterIcon />
        </button>
        <p className="note">Click button after entering each tag</p>
      </form>
      <TagList tags={filteredTags} isCancellable={true} deleteTag={deleteTag} />
    </div>
  );
};

export default Filter;

const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );
};
