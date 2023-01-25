"use client";

import TransactionsContext, {
  ITransactionsContext,
} from "@/contexts/transactionsContext";
import React, {
  ChangeEvent,
  Context,
  FormEvent,
  useContext,
  useState,
} from "react";
import { toast } from "react-hot-toast";

const useTagFilter = () => {
  const [tagInputValue, setTagInputValue] = useState("");
  const { filteredTags, setFilteredTags } = useContext(
    TransactionsContext as Context<ITransactionsContext>
  );
  // const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const handleTagInputValue = (ev: ChangeEvent<HTMLInputElement>) => {
    setTagInputValue(ev.target.value.trim());
  };

  const clearTagInputValue = () => {
    setTagInputValue("");
  };

  const deleteTag = (id: number) => {
    setFilteredTags((prev) => prev.filter((_, idx) => id !== idx));
  };

  const addFilterTag = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const val = tagInputValue.trim();

    // no tag text
    if (!val) {
      toast.error("Please enter a tag");
      return;
    }

    // tag already in `filteredTags`
    if (filteredTags.some((tag) => tag === val)) {
      toast.error("Filter already active");
      return;
    }

    setFilteredTags((prev) => [...prev, val]);
    clearTagInputValue();
  };

  return {
    tagInputValue,
    handleTagInputValue,
    filteredTags,
    addFilterTag,
    deleteTag,
  };
};

export default useTagFilter;
