// @ts-nocheck
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useColorModeValue } from '@chakra-ui/react';

const RentalRevenueData = [
  {
    name: '1',
    uv: 40,
  },
  {
    name: '2',
    uv: 40,
  },
  {
    name: '3',
    uv: 40,
  },
  {
    name: '4',
    uv: 40,
  },
  {
    name: '5',
    uv: 40,
  },
  {
    name: '6',
    uv: 40,
  },
  {
    name: '7',
    uv: 40,
  },
  {
    name: '8',
    uv: 40,
  },
  {
    name: '9',
    uv: 40,
  },
  {
    name: '10',
    uv: 40,
  },
];

export const RentalRevenueChart = () => {
  const color = useColorModeValue('#4E504F', '#FFD2D1');

  return (
    <ResponsiveContainer>
      <BarChart height={200} width={500} data={RentalRevenueData}>
        <XAxis dataKey="name" stroke={color} />
        {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} /> */}
        <Bar dataKey="uv" fill={color} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};
const RealizedAppreciationData = [
  {
    name: [1, 'Construction earn-out'],
    uv: 65,
  },
  {
    name: [5, 'Refinance'],
    uv: 40,
  },
  {
    name: [10, 'Sale'],
    uv: 100,
  },
];
export const RealizedAppreciationChart = () => {
  const color = useColorModeValue('#4E504F', '#FFD2D1');

  return (
    <ResponsiveContainer>
      <BarChart data={RealizedAppreciationData}>
        <XAxis dataKey="name[0]" stroke={color} domain={[0, 'dataMax + 50']} />

        <YAxis
          domain={[0, 'dataMax + 50']}
          dataKey={null}
          axisLine={false}
          tickLine={false}
          width={0}
        />
        {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} /> */}
        <Bar dataKey="uv" fill={color} barSize={25} label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const renderCustomBarLabel = ({ payload, x, y, width, height, value, name }: { name: string }) => {
  const color = useColorModeValue('#4E504F', '#FFD2D1');

  return (
    <text x={x + width / 2} y={y} fill={color} textAnchor="middle" dy={-6}>{` ${name[1]}`}</text>
  );
};

const OverAllCashData = [
  {
    name: 'Closing',
    uv: 0,
    pv: -100,
    amt: 0,
  },
  {
    name: 'Y1',
    uv: 25,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Y2',
    uv: 25,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Y3',
    uv: 20,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Y4',
    uv: 30,
    pv: 0,
    amt: 0,
  },
  {
    name: 'Y5',
    uv: 75,
    pv: 10,
    amt: 65,
  },
];

export const OverAllCashChart = () => {
  const color = useColorModeValue('#4E504F', '#FFD2D1');
  const color1 = useColorModeValue('#888888', '#888888');
  const color2 = useColorModeValue('#232525', '#232525');
  const color3 = useColorModeValue('#DFDFDF', '#DFDFDF');

  return (
    <ResponsiveContainer>
      <BarChart
        data={OverAllCashData}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 0,
          left: -25,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="1 1" /> */}
        <XAxis dataKey="name" stroke={color} />
        <YAxis stroke={color} />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Bar barSize={25} dataKey="uv" fill={color1} stackId="stack" />
        <Bar barSize={25} dataKey="pv" fill={color2} stackId="stack" />
        <Bar barSize={25} dataKey="amt" fill={color3} stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const TotalReturnData = [
  { name: 'Group A', value: 3 },
  { name: 'Group B', value: 78 },
  { name: 'Group C', value: 100 },
];

export const TotalReturnChart = () => {
  const color1 = useColorModeValue('#888888', '#888888');
  const color2 = useColorModeValue('#232525', '#232525');
  const color3 = useColorModeValue('#DFDFDF', '#DFDFDF');
  const COLORS = [color2, color1, color3];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={TotalReturnData}
          innerRadius="75%"
          outerRadius="100%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          startAngle={0}
        >
          {TotalReturnData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
