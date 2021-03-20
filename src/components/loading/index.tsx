import { Fragment } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const Loading = () => (
  <Fragment>
    <Box pos="fixed" left="50%" top="50%" transform="translate(-50%,-50%)">
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="secondary.500"
      />
    </Box>
  </Fragment>
);
