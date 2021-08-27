import { Fragment, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Container, NavBar } from '../../../../components';
import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { Data } from './ownershipStructureData';
import { titleToUrlFragment } from '../../lib';

const Error404 = lazy(() => import('../../../error404'));

const OwnershipStructureFlow = () => {
  const { title } = useParams<{ title: string }>();
  if (!title) return Data()[0].jsx;

  const FilteredData = Data().find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  useScrollToTop();

  return FilteredData ? (
    <Fragment>
      <NavBar />
      <Container
        minH={{ base: `calc(${window.innerHeight}px - 8rem)` }}
        h={{ base: 'auto', md: '725px' }}
        pb={{ base: 16 }}
      >
        {FilteredData.jsx}
      </Container>
    </Fragment>
  ) : (
    <Error404 />
  );
};

// eslint-disable-next-line import/no-default-export
export default OwnershipStructureFlow;