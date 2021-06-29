import { Fragment, MouseEventHandler, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, NavBar } from '../../../../components';
import { Data } from './cashFlowData';
import { titleToUrlFragment } from '../../lib';

const CourseCashFlow = () => {
  const { title } = useParams<{ title: string }>();

  const FilteredData = Data.find(({ name }: { name: string }) =>
    titleToUrlFragment(name).includes(title),
  );

  return (
    <Fragment>
      <NavBar />
      <Container
        minH={{ base: 'calc(100vh - 4rem)' }}
        h={{ base: 'auto', md: '700px' }}
        pb={{ base: 20 }}
      >
        {FilteredData.jsx}
      </Container>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
