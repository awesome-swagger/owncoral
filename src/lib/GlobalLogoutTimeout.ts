
export const GlobalLogoutTimeout: {
  timer: ReturnType<typeof setTimeout> | null;
  timerExpiry: Date | null;
  callback: () => void;
} = {
  timer: null,
  timerExpiry: null,
  callback: () => {},
};
