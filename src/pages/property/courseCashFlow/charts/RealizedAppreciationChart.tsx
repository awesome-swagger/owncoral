import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { format } from 'date-fns';
import { scaleBand, scaleLinear } from '@visx/scale';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export const RealizedAppreciationChart = () => (
  <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>
);

const data = [
  {
    t: new Date(2021, 0, 1),
    expected: 65,
    name: 'Construction earn-out',
  },
  {
    t: new Date(2021, 4, 1),
    expected: 40,
    name: 'Refinance',
  },
  {
    t: new Date(2021, 9, 1),
    expected: 100,
    name: 'Sale',
  },
];
const verticalMargin = 120;

// accessors
const getLetter = (d: any) => d.t;
const getLetterFrequency = (d: any) => Number(d.expected) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};

function Chart({ width, height, events = false }: BarsProps) {
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
    paddingOuter: 0.3,
  });
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax],
  );
  const formatDate = (t: Date) => format(t, 'M');

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={(barX || 0) + 10}
              y={barY}
              width={barWidth - 20}
              height={barHeight}
              fill="#4E504F"
            />
          );
        })}
        <AxisBottom scale={xScale} tickFormat={formatDate} top={yMax} />;
      </Group>
    </svg>
  );
}
