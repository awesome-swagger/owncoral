import { BarStack } from '@visx/shape';
import { Group } from '@visx/group';
import { Grid } from '@visx/grid';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export const CumulativeChart = () => {
  return <ParentSize>{({ width, height }) => <Chart width={width} height={height} />}</ParentSize>;
};

export type BarStackProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const barColor1 = '#888888';
const barColor2 = '#232525';
const barColor3 = '#DFDFDF';

const defaultMargin = { top: 40, right: 0, bottom: 0, left: 0 };
const data = [
  { name: 'Clo.', NewYork: '0', SanFrancisco: '0', Austin: '0' },
  { name: 'Y1', NewYork: '15', SanFrancisco: '0', Austin: '15' },
  { name: 'Y2', NewYork: '20', SanFrancisco: '1', Austin: '19' },
  { name: 'Y3', NewYork: '25', SanFrancisco: '1', Austin: '24' },
  { name: 'Y4', NewYork: '30', SanFrancisco: '2', Austin: '33' },
  { name: 'Y5', NewYork: '35', SanFrancisco: '2', Austin: '38' },
  { name: 'Y6', NewYork: '45', SanFrancisco: '2', Austin: '43' },
  { name: 'Y6', NewYork: '55', SanFrancisco: '2', Austin: '48' },
  { name: 'Y7', NewYork: '65', SanFrancisco: '3', Austin: '52' },
  { name: 'Y8', NewYork: '75', SanFrancisco: '4', Austin: '56' },
  { name: 'Y9', NewYork: '85', SanFrancisco: '5', Austin: '60' },
  { name: 'Y10', NewYork: '100', SanFrancisco: '5', Austin: '65' },
];

const keys = Object.keys(data[0]).filter((d) => d !== 'name');

const dataTotals = data.reduce((allTotals, currentDate: any) => {
  const totalData = keys.reduce((dailyTotal, k) => {
    dailyTotal += Number(currentDate[k]);
    return dailyTotal;
  }, 0);
  allTotals.push(totalData);
  return allTotals;
}, [] as number[]);

// accessors
const getDate = (d: any) => d.name;

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
});
const dataScale = scaleLinear<number>({
  domain: [0, Math.max(...dataTotals)],
  nice: true,
});
const colorScale = scaleOrdinal({
  domain: keys,
  range: [barColor1, barColor2, barColor3],
});
function Chart({ width, height, margin = defaultMargin }: BarStackProps) {
  if (width < 10) return null;
  const xMax = width;
  const yMax = height - margin.top - 100;

  dateScale.rangeRound([0, xMax]);
  dataScale.range([yMax, 0]);

  return width < 10 ? null : (
    <div style={{ position: 'relative' }}>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="#00000000" rx={14} />
        <Grid
          top={margin.top}
          left={margin.left}
          xScale={dateScale}
          yScale={dataScale}
          width={xMax}
          height={yMax}
          stroke="black"
          strokeOpacity={0.1}
        />
        <Group top={margin.top}>
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
                    x={bar.x + 5}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width - 10}
                    fill={bar.color}
                  />
                )),
              )
            }
          </BarStack>
        </Group>
        <AxisBottom
          top={yMax + margin.top}
          scale={dateScale}
          stroke={barColor3}
          tickStroke={barColor3}
          tickLabelProps={() => ({
            fill: barColor3,
            fontSize: 15,
            textAnchor: 'middle',
          })}
        />
      </svg>
    </div>
  );
}
