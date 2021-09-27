import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { titleToUrlFragment } from '../../lib';
import { useScrollToTop } from '../../../../lib/useScrollToTop';

import { Data } from './OwnershipStructureData';

const Error404 = lazy(() => import('../../../error404'));

const OwnershipStructureFlow = () => {
  useScrollToTop();

  const data = Data();
  const { title } = useParams<{ title: string }>();
  if (!title) return data[0].jsx;

  const filteredData = data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  return filteredData ? filteredData.jsx : <Error404 />;
}

// eslint-disable-next-line import/no-default-export
export default OwnershipStructureFlow;
