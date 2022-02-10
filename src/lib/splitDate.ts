import type { SplitDateT } from '../components/daypicker';

export const splitDate = (date: Date): SplitDateT => {
  return {
    year: date.getUTCFullYear().toString(),
    month: date.getUTCMonth().toString(),
    day: date.getUTCDate().toString(),
  };
};
