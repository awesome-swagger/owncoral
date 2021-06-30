import { Fragment, lazy } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { BackBtn, Container, NavBar } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { titleToUrlFragment } from '../../lib';
import { GlossaryData } from '../glossaryData';

const Error404 = lazy(() => import('../../../error404'));

const GlossaryDetail = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  useScrollToTop();
  const FilteredData: any = GlossaryData.find((val) =>
    titleToUrlFragment(val.name).includes(title),
  );

  return FilteredData ? (
    <Fragment>
      <NavBar />
      <Container>
        <BackBtn handleClick={() => history.goBack()} />
        <Fragment>
          <Title2 my={4}>{FilteredData.name}</Title2>
          {FilteredData.jsx}
        </Fragment>
      </Container>
    </Fragment>
  ) : (
    <Error404 />
  );
};

// eslint-disable-next-line import/no-default-export
export default GlossaryDetail;
