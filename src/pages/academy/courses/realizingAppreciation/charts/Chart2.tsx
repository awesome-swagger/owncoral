import { useColorModeValue } from '@chakra-ui/react';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStack } from '@visx/shape';

export const Chart2 = () => (
  <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>
);

export type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 50 };
const data = [
  { name: '1', purchase: '525', present: '975', empty: '0', average: '0' },
  { name: '2', purchase: '975', present: '525', empty: '0', average: '0' },
  { name: '3', purchase: '0', present: '0', empty: '525', average: '450' },
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
  const barColor1 = useColorModeValue('#074851', '#48CAE4');
  const barColor2 = useColorModeValue('#80ECD1', '#F1FAEE');
  const barColor3 = useColorModeValue('#00000000', '#00000000');
  const barColor4 = useColorModeValue('#b5838d', '#b5838d');
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
    range: [barColor1, barColor2, barColor3, barColor4],
  });

  const leftAxisData = [{ name: '$.5m' }, { name: '$1m' }, { name: '$1.5m' }];

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
        <Group left={margin.left} top={margin.top}>
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
                    x={bar.x + 35}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width - 70}
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
            fill: '#00000000',
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
