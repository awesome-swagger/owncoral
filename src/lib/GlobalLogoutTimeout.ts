export const GlobalLogoutTimeout: {
  timer: null | ReturnType<typeof setTimeout>;
  callback: () => void
} = {
  timer: null,
  callback: () => {},
};
