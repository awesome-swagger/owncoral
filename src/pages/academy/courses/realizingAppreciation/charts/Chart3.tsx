import { useColorModeValue, Text } from '@chakra-ui/react';
import { AxisBottom } from '@visx/axis';
import { Group } from '@visx/group';
import { ParentSize } from '@visx/responsive';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { BarStack } from '@visx/shape';
import Theme from '../../../../../theme';
import { transparentize } from '@chakra-ui/theme-tools';

export const Chart3 = () => (
  <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>
);

export type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 };
const data = [
  { name: 'At Purchase', purchase: '650', present: '350', empty: '0', average: '0' },
  { name: '', purchase: '975', present: '525', empty: '0', average: '0' },
  { name: ' ', purchase: '0', present: '0', empty: '525', average: '450' },
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
  const { colors } = Theme;
  const barColor1 = useColorModeValue(colors.teal[700], colors.teal[400]);
  const barColor2 = useColorModeValue(colors.green[200], colors.green[100]);
  const barColor3 = useColorModeValue('transparent', 'transparent');
  const barColor4 = useColorModeValue(colors.orange[300], colors.orange[200]);
  const textColor = useColorModeValue(colors.teal[500], colors.white);

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
        <rect x={0} y={0} width={width} height={height} fill="transparent" rx={14} />
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
                    x={bar.x + 42}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width - 84}
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
      </svg>
      <Text pos="absolute" top="25%" left="13%" color={textColor}>
        $1m
      </Text>
      <Text pos="absolute" textAlign="center" width="100%" top="15%" color={textColor}>
        $1.5m
      </Text>
    </div>
  );
};
