import { lazy } from 'react';
import { useParams } from 'react-router-dom';

import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { titleToUrlFragment } from '../../lib';

import { Data } from './CashFlowData';

const Error404 = lazy(() => import('../../../error404'));

const CourseCashFlow = () => {
  useScrollToTop();

  const { title } = useParams<{ title: string }>();
  if (!title) return Data[0].jsx;

  const filteredData = Data.find(({ name } : { name: string }) =>
    titleToUrlFragment(name) === title,
  );

  return filteredData ? filteredData.jsx : <Error404 isComponent />;
}

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
