import { Box, Heading, Flex, Center, Icon } from '@chakra-ui/react';
import { BsQuestionCircle } from 'react-icons/bs';

export const SourcesAndUses = () => (
  <Box>
    <Heading fontSize="2xl" fontWeight="bold">
      Sources & Uses of funds
    </Heading>
    <Heading fontSize="md">
      Enim, luctus diam suspendisse lectus sed donec eget in ut. Neque quis nibh diam orci nunc.
    </Heading>
    <Heading fontSize="md" fontWeight="bold">
      Where the funding comes from?
    </Heading>
    <Heading fontSize="md">
      Ut metus porta ultricies sed non amet ornare at. Commodo venenatis, varius amet ornare. At
      dolor.
    </Heading>
    <Flex my={4} borderRadius="base" overflow="hidden" h={8} justifyContent="space-between">
      <Box bg="gray.900" w="20%"></Box> <Box bg="gray.700" w="49%"></Box>
      <Box bg="black" w="30%"></Box>
    </Flex>
    <Center justifyContent="space-between" h={14} my={4}>
      <Box>
        <Heading fontSize="md" fontWeight="bold">
          Investors + Coral
        </Heading>
        <Heading fontSize="sm">55% - $999k</Heading>
      </Box>
      <Box h="100%" borderLeft="1px" px={4}>
        <Heading fontSize="md" fontWeight="bold">
          Investors + Coral
        </Heading>
        <Heading fontSize="sm">55% - $999k</Heading>
      </Box>
      <Box pl={8}>
        <Icon w={6} h={6} as={BsQuestionCircle} />
      </Box>
    </Center>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      my={4}
      border="1px"
      layerStyle="lightBorder"
    >
      <Box>
        <Heading fontSize="md" fontWeight="bold">
          Why Coral participates in equity?
        </Heading>
        <Heading fontSize="sm">Crash course</Heading>
      </Box>
      <Box>
        <Icon w={6} h={6} as={BsQuestionCircle} />
      </Box>
    </Flex>
    <Heading mt={8} fontSize="md" fontWeight="bold">
      How the funds are going to be used?
    </Heading>
    <Heading fontSize="md">
      Elit, donec sagittis pellentesque phasellus est. Massa cras ac tempus ullamcorper velit ornare
      at.
    </Heading>
    <Box>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Purchase price</Heading>
        <Heading fontSize="md">$890,000</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Closing costs</Heading>
        <Heading fontSize="md">$8,900</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Acquisition Fee</Heading>
        <Heading fontSize="md">$17,800</Heading>
      </Flex>
      <Flex justifyContent="space-between">
        <Heading fontSize="md">Capex Reserve</Heading>
        <Heading fontSize="md">$131,800</Heading>
      </Flex>
      <Flex my={4} borderTop="1px" borderStyle="dashed" justifyContent="space-between">
        <Heading fontSize="lg" fontWeight="bold">
          Total capital cost
        </Heading>
        <Heading fontSize="lg" fontWeight="bold">
          $1,048,500
        </Heading>
      </Flex>
    </Box>
    <Box px={4} my={4} textAlign="center" border="1px" layerStyle="lightBorder">
      <Heading fontSize="lg"> Learn more about uses of funds</Heading>
    </Box>
  </Box>
);
