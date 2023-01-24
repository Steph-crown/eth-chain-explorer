import ITag from "./ITag";

interface ITagList {
  tags: string[];
  isCancellable?: boolean;
  deleteTag?: (id: number) => void;
}

export default ITagList;
