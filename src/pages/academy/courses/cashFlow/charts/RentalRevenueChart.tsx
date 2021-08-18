import { useColorModeValue } from '@chakra-ui/react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStack } from '@visx/shape';

export const RentalRevenueChart = () => (
  <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>
);

export type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 40 };
const data = [
  { name: 'Clo.', operatingCashFlow: '2' },
  { name: "'21", operatingCashFlow: '2' },
  { name: "'22", operatingCashFlow: '2' },
  { name: "'23", operatingCashFlow: '2' },
  { name: "'24", operatingCashFlow: '2' },
  { name: "'25", operatingCashFlow: '2' },
  { name: "'26", operatingCashFlow: '2' },
  { name: "'26", operatingCashFlow: '2' },
  { name: "'27", operatingCashFlow: '2' },
  { name: "'28", operatingCashFlow: '2' },
  { name: "'29", operatingCashFlow: '2' },
];

const keys = Object.keys(data[0]).filter((d) => d !== 'name');

const dataTotals = data.reduce((allTotals, currentDate: any) => {
  const totalData = keys.reduce((dailyTotal, k) => {
    dailyTotal += Number(currentDate[k]); // eslint-disable-line no-param-reassign
    return dailyTotal;
  }, 0);
  allTotals.push(totalData);
  return allTotals;
}, [] as number[]);

const Chart = ({ width, height, margin = defaultMargin }: BarStackProps) => {
  const barColor = useColorModeValue('#074851', '#48CAE4');
  const textColor = useColorModeValue('#8D8F8F', '#FFFFFF');

  // accessors
  const getDate = (d: any) => d.name;

  // scales
  const dateScale = scaleBand<string>({
    domain: data.map(getDate),
  });
  const dataScale = scaleLinear<number>({
    domain: [0, Math.max(...dataTotals)],
    nice: true,
  });
  const colorScale = scaleOrdinal({
    domain: keys,
    range: [barColor],
  });

  const leftAxisData = [
    { name: '0' },
    { name: '$5k' },
    { name: '$10k' },
    { name: '$15k' },
    { name: '$20k' },
  ];

  const getAxisData = ({ name }: { name: string }) => name;

  const leftScale = scaleBand({
    domain: leftAxisData.map(getAxisData),
  });

  if (width < 10) return null;
  const xMax = width - margin.left;
  const yMax = height - margin.top - 100;

  dateScale.rangeRound([0, xMax]);
  dataScale.range([yMax, 0]);

  leftScale.range([height - 90, 0]);

  return (
    <div style={{ position: 'relative', paddingTop: '20px' }}>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#00000000" rx={14} />
        <Group left={margin.left} top={yMax + margin.top - 15}>
          <BarStack
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={dataScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x + 12}
                    y={bar.y}
                    height={15}
                    width={bar.width - 24}
                    fill={bar.color}
                  />
                )),
              )
            }
          </BarStack>
        </Group>
        <AxisBottom
          left={margin.left}
          top={yMax + margin.top}
          scale={dateScale}
          stroke={textColor}
          tickStroke="none"
          tickLabelProps={() => ({
            fill: textColor,
            fontSize: 15,
            textAnchor: 'middle',
          })}
        />
        <AxisLeft
          top={11}
          left={margin.left}
          scale={leftScale}
          tickStroke="none"
          stroke="none"
          tickLabelProps={() => ({
            fill: textColor,
            fontSize: 15,
            textAnchor: 'end',
          })}
        />
      </svg>
    </div>
  );
};
