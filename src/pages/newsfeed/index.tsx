import { Timeline } from 'react-twitter-widgets';
import { useColorMode } from '@chakra-ui/react';

import { Container } from '../../components';

const Newsfeed = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container px={5} pb={0}>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'owncoral'
          }}
          options={{
            theme: colorMode,
            "chrome": 'transparent'
          }}
        />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Newsfeed;
