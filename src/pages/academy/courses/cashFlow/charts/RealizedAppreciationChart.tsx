import { useMemo } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Bar } from '@visx/shape';
import { format } from 'date-fns';

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
const barLabel = (d: any) => d.t;
const chartData = (d: any) => Number(d.expected) * 100;

export type BarsProps = {
  width: number;
  height: number;
  events?: boolean;
};

function Chart({ width, height, events = false }: BarsProps) {
  const barColor = useColorModeValue('#4E504F', '#F1F1F1');
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
        domain: [0, Math.max(...data.map(chartData))],
      }),
    [yMax],
  );
  const formatDate = (t: Date) => format(t, 'M');

  const tickLabelProps = () =>
    ({
      fill: barColor,
      fontSize: 12,
    } as const);

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = barLabel(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(chartData(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={(barX || 0) + 10}
              y={barY}
              width={barWidth - 20}
              height={barHeight}
              fill={barColor}
            />
          );
        })}
        <AxisBottom
          scale={xScale}
          tickFormat={formatDate}
          top={yMax}
          tickLabelProps={tickLabelProps}
          tickStroke="none"
          stroke={barColor}
        />
        ;
      </Group>
    </svg>
  );
}
