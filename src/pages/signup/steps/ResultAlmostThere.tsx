import { useContext } from 'react';
import { Text } from '@chakra-ui/react';

import { FlexContainer } from '../../../components';
import { Title2 } from '../../../components/text';
import { UserContext } from '../../../userContext';

export const ResultAlmostThere = () => {
  const [user] = useContext(UserContext);

  return (
    <FlexContainer layerStyle="noSelect" isFooter={false}>
      <Title2 my={4} textAlign="center">
        Thanks{user?.legalFirst ? ' ' + user.legalFirst : ''}, we&apos;re almost there!
      </Title2>
      <Text textStyle="Body2" textAlign="center" w="80%">
        Your access is to Coral is being reviewed by our team.
        <br />
        Before getting started, we&apos;ll reach out to you to walk through Coral&apos;s investment
        process. Don&apos;t worry, we&apos;ll keep it short.
      </Text>
    </FlexContainer>
  );
};
