import { useParams, useHistory } from 'react-router-dom';
import { BackBtn, Container } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { GlossaryData } from '../../../../lib/glossaryData';
import { titleToUrlFragment } from '../../lib';

const GlossaryDetail = () => {
  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  const FilteredData: any = GlossaryData.find((val) =>
    titleToUrlFragment(val.name).includes(title),
  );

  if(!FilteredData) return null;

  return (
    <Container>
      <BackBtn handleClick={() => history.goBack()} />
      <Title2 fontFamily="serif" fontStyle="italic" fontWeight="semibold" my={4}>
        {FilteredData.name}
      </Title2>
      {FilteredData.jsx}
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default GlossaryDetail;
