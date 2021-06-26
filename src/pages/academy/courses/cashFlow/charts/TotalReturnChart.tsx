import { Fragment, useState } from 'react';
import { animated, interpolate, useTransition } from 'react-spring';
import { useColorModeValue } from '@chakra-ui/react';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleOrdinal } from '@visx/scale';
import Pie, { PieArcDatum, ProvidedProps } from '@visx/shape/lib/shapes/Pie';

export const TotalReturnChart = () => (
  <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>
);

const ChartData = [
  {
    TaxableIncome: '3',
    CapitalGains: '78',
    ReturnOfCapital: '100',
  },
];

const DataNames = Object.keys(ChartData[0]).filter((k) => k !== 'date');
const PieData = DataNames.map((name) => ({
  label: name,
  usage: Number((ChartData[0] as any)[name]),
}));

const usage = (d: { usage: number }) => d.usage;

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

function Chart({ width, height, margin = defaultMargin, animate = true }: PieProps) {
  const BgColor = useColorModeValue('#FFFFFF', '#FFFFFF00');
  const pieColor1 = useColorModeValue('#232525', '#232525');
  const pieColor2 = useColorModeValue('#888888', '#232525');
  const pieColor3 = useColorModeValue('#DFDFDF', '#232525');

  const [chartValue, setChartValue] = useState<string | null>(null);

  const PieColor = scaleOrdinal({
    domain: DataNames,
    range: [pieColor1, pieColor2, pieColor3],
  });

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 30;

  return (
    <svg width={width} height={height}>
      <rect rx={14} width={width} height={height} fill={BgColor} />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={chartValue ? PieData.filter(({ label }) => label === chartValue) : PieData}
          pieValue={usage}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => (
            <AnimatedPie
              {...pie}
              animate={animate}
              getKey={(arc) => arc.data.label}
              onClickDatum={({ data: { label } }) =>
                animate && setChartValue(chartValue && chartValue === label ? null : label)
              }
              getColor={(arc) => PieColor(arc.data.label)}
            />
          )}
        </Pie>
      </Group>
    </svg>
  );
}

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});

const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition(arcs, getKey, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
  });
  return (
    <Fragment>
      {transitions.map(({ item: arc, props, key }: { item: any; props: any; key: string }) => {
        const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

        return (
          <g key={key}>
            <animated.path
              d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) =>
                path({
                  ...arc,
                  startAngle,
                  endAngle,
                }),
              )}
              fill={getColor(arc)}
              onClick={() => onClickDatum(arc)}
              onTouchStart={() => onClickDatum(arc)}
            />
            {hasSpaceForLabel && <animated.g style={{ opacity: props.opacity }} />}
          </g>
        );
      })}
    </Fragment>
  );
}
