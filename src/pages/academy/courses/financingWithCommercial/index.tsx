import { Fragment, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Container, NavBar } from '../../../../components';
import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { Data } from './financingWithCommercialData';
import { titleToUrlFragment } from '../../lib';
const Error404 = lazy(() => import('../../../error404'));

const FinancingWithCommercialFlow = () => {
  const { title } = useParams<{ title: string }>();
  if (!title) return Data[0].jsx;

  const FilteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  useScrollToTop();

  return FilteredData ? (
    <Fragment>
      <NavBar />
      <Container minH={{ base: `calc(${window.innerHeight}px - 8rem)` }} h="auto" pb={{ base: 16 }}>
        {FilteredData.jsx}
      </Container>
    </Fragment>
  ) : (
    <Error404 />
  );
};

// eslint-disable-next-line import/no-default-export
export default FinancingWithCommercialFlow;
