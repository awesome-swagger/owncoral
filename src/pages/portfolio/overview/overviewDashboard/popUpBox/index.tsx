import type React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';
import { Container, Option } from '../../../../../components';

export const PopUpBox = ({
  handleClose,
  handleFilter,
  filters,
}: {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilter: React.Dispatch<React.SetStateAction<Array<string>>>;
  filters: Array<string>;
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
            Filter properties by market
          </Heading>
          {AvalaibleFilters.map((value: { name: string; value: string }, index) => (
            <Box key={index}>
              <Option
                icon={false}
                onClick={() => {
                  handleFilter(filters.includes(value.name) ? filters : [...filters, value.name]);
                  handleClose(false);
                }}
              >
                <Center>
                  <Heading fontSize="md" m="0">
                    {value.name}
                  </Heading>
                  <Heading fontSize="sm" m="0" pl={2}>
                    {value.value}
                  </Heading>
                </Center>
              </Option>
              <Box h={1} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const AvalaibleFilters = [
  { name: 'All properties', value: '' },
  { name: 'Greater Boston Area', value: '5 properties' },
  { name: 'Shinjuku', value: '2 properties' },
];
