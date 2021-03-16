import { Box, Heading, Icon, Flex, Center } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';
import { BsQuestionCircle } from 'react-icons/bs';

export const AssetSection = () => (
  <Box>
    <Heading fontWeight="bold" fontSize="2xl">
      Asset Overview
    </Heading>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          2 rental units
        </Heading>
        <Heading fontSize="sm">Multifamily property</Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          2 rental units
        </Heading>
        <Heading fontSize="sm">Multifamily property</Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          1806 sqft of living space
        </Heading>
        <Heading fontSize="sm">Land space 3,920 sqft</Heading>
      </Box>
    </Flex>
    <Flex mt={6}>
      <Box minW={10}>
        <Icon as={FiMapPin} />
      </Box>
      <Box>
        <Heading my={1} fontSize="md" fontWeight="bold">
          Built in 1900
        </Heading>
        <Heading fontSize="sm">It needs a renovation</Heading>
      </Box>
    </Flex>
    <Center justifyContent="space-between" layerStyle="card" p={4} mt={6}>
      <Box>
        <Heading fontSize="md">Purchase price</Heading>
        <Heading fontSize="xl" fontWeight="bold" m="0">
          $890k
        </Heading>
        <Heading fontSize="sm">35% below market</Heading>
      </Box>
      <Box>
        <Icon w={6} h={6} as={BsQuestionCircle} />
      </Box>
    </Center>
  </Box>
);
