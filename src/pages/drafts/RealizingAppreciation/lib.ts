export const titleToUrlFragment = (title: string): string => {
  return title.trim().replace(/( )/g, '-').toLocaleLowerCase();
};
