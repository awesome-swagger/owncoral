export type ChartDataT = {
  t: Date;
  expected: number;
  actual: number;
};

export const chartData: ChartDataT[] = [
  {
    t: new Date(2021, 0, 1),
    expected: 500,
    actual: 526,
  },
  {
    t: new Date(2021, 1, 1),
    expected: 500,
    actual: 532,
  },
  {
    t: new Date(2021, 2, 1),
    expected: 500,
    actual: 494,
  },
  {
    t: new Date(2021, 3, 1),
    expected: 500,
    actual: 525,
  },
  {
    t: new Date(2021, 4, 1),
    expected: 500,
    actual: 535,
  },
  {
    t: new Date(2021, 5, 1),
    expected: 500,
    actual: 554,
  },
];
