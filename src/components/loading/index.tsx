import { Box, Icon } from '@chakra-ui/react';

import NoTextLogo from '../../assets/coral_logo-notext.svg';

export const Loading = () => (
  <Box className="splash-screen" pos="fixed" left="50%" top="50%" transform="translate(-50%,-50%)">
    <Icon id="coral-logo" as={NoTextLogo} w="110px" h="110px" />
    {/* <Spinner size="xl" thickness="4px" speed="0.65s" emptyColor="gray.200" color="secondary.500" /> */}
  </Box>
);
