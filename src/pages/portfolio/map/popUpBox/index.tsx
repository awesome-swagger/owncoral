import type React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

import { Container, FilterPopUp, Option } from '../../../../components';

export const PopUpBox = ({
  handleClose,
} : {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Box w="100vw" h={window.innerHeight} pos="fixed" top="0" left="0" bg="blackAlpha.400">
    <Container>
      <Box w="100%" h="100%" pos="absolute" top="0" left="0" onClick={() => handleClose(false)} />
      <FilterPopUp>
        <Heading fontSize="lg" fontWeight="bold">
          Select market
        </Heading>
        <Option icon={null}>
          <Center>
            <Heading fontSize="md" m="0">
              Greater Boston Area
            </Heading>
            <Heading fontSize="sm" m="0" pl={2}>
              5 properties
            </Heading>
          </Center>
        </Option>
        <Box h={1} />
        <Option icon={null}>
          <Center>
            <Heading fontSize="md" m="0">
              Shinjuku
            </Heading>
            <Heading fontSize="sm" m="0" pl={2}>
              3 properties
            </Heading>
          </Center>
        </Option>
      </FilterPopUp>
    </Container>
  </Box>
);
