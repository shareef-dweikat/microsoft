export const getIDFromURL = (url: string | undefined) => {
  if (!url) return "";
  return url.slice(-7, -6);
};

export const getPagesCount = (count: number) => {
  if (!count) return 0;
  return Math.ceil(count / 10);
};
