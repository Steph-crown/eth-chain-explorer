interface ITag {
  name: string;
  isCancellable?: boolean;
  cancel?: () => void;
}

export default ITag;
