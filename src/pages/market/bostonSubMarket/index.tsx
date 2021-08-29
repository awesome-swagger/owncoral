import { useParams } from 'react-router-dom';
import { Cambridge } from './cambridge';
import { Somerville } from './somerville';

const SubMarkets = [
  {
    id: 'cambridge',
    component: <Cambridge />,
  },
  { id: 'somerville', component: <Somerville /> },
];

const BostonSubMarket = () => {
  const { name }: { name: string } = useParams();
  const FilteredData = SubMarkets.filter(({ id }) => id.includes(name));

  return FilteredData[0].component;
};

export default BostonSubMarket;
