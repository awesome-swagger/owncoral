// @ts-nocheck
import React, { useMemo } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { format } from 'date-fns';

export const OverAllCashChart = () => {
  return <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>;
};

const data = [
  {
    t: new Date(2021, 0, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 1, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 2, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 3, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 4, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 5, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 6, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 7, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 8, 1),
    expected: 500,
  },
  {
    t: new Date(2021, 9, 1),
    expected: 500,
  },
];
const verticalMargin = 120;

// accessors
const barLabel = (d: any) => d.t;
const chartData = (d: any) => Number(d.expected) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};

function Chart({ width, height, events = false }: BarsProps) {
  const BarColor = useColorModeValue('#4E504F', '#4E504F');
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;
  const paddingInner = 0.35;

  // scales, memoize for performance
  const x = (d: any) => d.t;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    paddingInner: paddingInner,
    paddingOuter: 0.5,
  });
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 10],
        round: true,
        domain: [0, Math.max(...data.map(chartData))],
      }),
    [yMax],
  );
  const formatDate = (t: Date) => format(t, 'M');

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2} left={10}>
        {data.map((d) => {
          const letter = barLabel(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(chartData(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={BarColor}
            />
          );
        })}
        <AxisBottom scale={xScale} tickFormat={formatDate} top={yMax} />
        <AxisLeft numTicks={3} scale={yScale} tickFormat={formatDate} left={5} />
      </Group>
    </svg>
  );
}