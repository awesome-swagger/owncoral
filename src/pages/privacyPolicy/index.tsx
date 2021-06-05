import { Text } from '@chakra-ui/react';
import { Container, BackBtn } from '../../components';
import { Title2 } from '../../components/text';
import { useHistory } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <BackBtn pos="absolute" handleClick={handleBack} />
      <Title2 textAlign="center">Privacy policy</Title2>
      <Text textStyle="BodyText1" mt={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text textStyle="BodyText1" mt={4}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </Text>
    </Container>
  );
};

export default PrivacyPolicy;
