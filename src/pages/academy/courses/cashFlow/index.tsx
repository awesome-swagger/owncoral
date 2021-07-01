import { Fragment, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Container, NavBar } from '../../../../components';
import { Data } from './cashFlowData';
import { titleToUrlFragment } from '../../lib';

const Error404 = lazy(() => import('../../../error404'));

const CourseCashFlow = () => {
  const { title } = useParams<{ title: string }>();
  if(!title) return Data[0].jsx;

  const FilteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  return FilteredData ? (
    <Fragment>
      <NavBar />
      <Container
        minH={{ base: 'calc(100vh - 4rem)' }}
        h={{ base: 'auto', md: '750px' }}
        pb={{ base: 20 }}
      >
        {FilteredData.jsx}
      </Container>
    </Fragment>
  ) : (
    <Error404 />
  );
};

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
