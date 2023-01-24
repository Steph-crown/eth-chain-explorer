import { ITagList } from "@/interfaces";
import React, { FC } from "react";
import Tag from "./Tag";

const TagList: FC<ITagList> = ({ tags, isCancellable, deleteTag }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, id) => (
        <Tag
          name={tag}
          isCancellable={isCancellable}
          key={tag + id}
          cancel={() => {
            deleteTag ? deleteTag(id) : null;
          }}
        />
      ))}
    </div>
  );
};

export default TagList;
