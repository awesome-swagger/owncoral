import { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BackBtn, Container } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { titleToUrlFragment } from '../../lib';
import { GlossaryData } from '../glossaryData';

const GlossaryDetail = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  const FilteredData: any = GlossaryData.find((val) =>
    titleToUrlFragment(val.name).includes(title),
  );

  return (
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
  );
};

// eslint-disable-next-line import/no-default-export
export default GlossaryDetail;
