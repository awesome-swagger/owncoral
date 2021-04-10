import type React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';
import { Container, Option } from '../../../../components';

export const PopUpBox = ({
  handleClose,
}: {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box w="100vw" h="100vh" pos="fixed" top="0" left="0" bg="blackAlpha.400">
      <Container>
        <Box w="100%" h="100%" pos="absolute" top="0" left="0" onClick={() => handleClose(false)} />
        <Box
          layerStyle="popUpColor"
          borderTopRadius="2xl"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          p={4}
        >
          <Heading fontSize="lg" fontWeight="bold">
            Select market
          </Heading>
          <Option icon={false}>
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
          <Option icon={false}>
            <Center>
              <Heading fontSize="md" m="0">
                Shinjuku
              </Heading>
              <Heading fontSize="sm" m="0" pl={2}>
                3 properties
              </Heading>
            </Center>
          </Option>
        </Box>
      </Container>
    </Box>
  );
};
