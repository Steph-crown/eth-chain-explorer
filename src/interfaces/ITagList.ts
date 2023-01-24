import ITag from "./ITag";

interface ITagList {
  tags: string[];
  isCancellable?: boolean;
  deleteTag?: (id: number) => void;
  tagBg?: string;
  editable?: boolean;
}

export default ITagList;
