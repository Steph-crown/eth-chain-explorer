"use client";

import { ITagList } from "@/interfaces";
import React, { FC, MouseEvent, useState } from "react";
import { toast } from "react-hot-toast";
import Tag from "./Tag";

const TagList: FC<ITagList> = ({
  tags,
  isCancellable,
  deleteTag,
  tagBg,
  editable,
  addTagToTransaction,
}) => {
  const [addTagInputOpen, setAddTagInputOpen] = useState(false);
  const [addTagInputValue, setAddTagInputValue] = useState("");

  const handleAddTagInputValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAddTagInputValue(ev.target.value.trim());
  };

  const openAddTagInput = () => setAddTagInputOpen(true);

  const closeAddTagInput = () => setAddTagInputOpen(false);

  const addTag = () => {
    if (!addTagInputValue) {
      toast.error("Please enter a value");
      return;
    }

    if (addTagInputOpen && addTagToTransaction) {
      addTagToTransaction(addTagInputValue);
      setAddTagInputValue("");
    }
  };

  return (
    <div className="tag-list">
      {tags.map((tag, id) => (
        <Tag
          name={tag}
          isCancellable={isCancellable}
          key={tag + id}
          tagBg={tagBg}
          cancel={() => {
            deleteTag ? deleteTag(id) : null;
          }}
        />
      ))}
      {editable ? (
        <div className="edit-taglist-form">
          {addTagInputOpen ? (
            <input
              type="text"
              placeholder="Enter tag name"
              value={addTagInputValue}
              onChange={handleAddTagInputValue}
            />
          ) : null}

          {addTagInputOpen ? (
            <button className="btn btn-tag" type="button" onClick={addTag}>
              <CheckIcon />
            </button>
          ) : (
            <button
              className="btn btn-tag"
              type="button"
              onClick={openAddTagInput}
            >
              <EditIcon />
            </button>
          )}

          {addTagInputOpen ? (
            <button
              className="btn btn-tag btn-red"
              type="button"
              onClick={closeAddTagInput}
            >
              <CloseIcon />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default TagList;

const EditIcon = () => {
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
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};

const CheckIcon = () => {
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
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

const CloseIcon = () => {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
