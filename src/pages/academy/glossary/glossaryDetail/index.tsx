import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { BackBtn, Container, NavBar } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { titleToUrlFragment } from '../../lib';
import { GlossaryData } from '../glossaryData';

const GlossaryDetail = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  useScrollToTop();
  const FilteredData: any = GlossaryData.find((val) =>
    titleToUrlFragment(val.name).includes(title),
  );

  return (
    <Fragment>
      <NavBar />
      <Container>
        <BackBtn handleClick={() => history.goBack()} />
        {FilteredData ? (
          <Fragment>
            <Title2 my={4}>{FilteredData.name}</Title2>
            {FilteredData.jsx}
          </Fragment>
        ) : (
          <Title2 textAlign="center" mt={20}>
            Not Found
          </Title2>
        )}
      </Container>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default GlossaryDetail;
