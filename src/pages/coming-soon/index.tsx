import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Center, Icon, Text, VStack } from '@chakra-ui/react';

import { Title2 } from '../../components/text';

const ComingSoonSplash = () => (
  <VStack align="center">
    <Icon as={FiClock} h={{ base: 14, md: 20 }} w={{ base: 14, md: 20 }} />
    <Title2>Coming Soon</Title2>
    <Text textStyle="Body1" align="center">
      Stay tuned, we&rsquo;re hard at work on this feature!
    </Text>
  </VStack>
);

const ComingSoon = ({ isPage = true }: { isPage?: boolean }) => {
  return isPage ? (
    <Center w="100%" h={window.innerHeight} pos="fixed" top={0} p={[10, 14]}>
      <ComingSoonSplash />
    </Center>
  ) : (
    <Center w="100%" h="400px">
      <ComingSoonSplash />
    </Center>
  );
};
// eslint-disable-next-line import/no-default-export
export default ComingSoon;
