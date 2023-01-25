const date = {
  relativeTime: (dateTime: Date) => {
    const toISOFormat = new Date(dateTime).toISOString();

    return <relative-time datetime={toISOFormat} />;
  },

  fromTimeStamp: (timeStamp: number) => new Date(timeStamp * 1000),
};

export default date;
