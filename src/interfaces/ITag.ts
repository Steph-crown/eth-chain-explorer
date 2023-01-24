interface ITag {
  name: string;
  isCancellable?: boolean;
  cancel?: () => void;
  tagBg?: string;
}

export default ITag;
