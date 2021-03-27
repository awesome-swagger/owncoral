import { Heading, Box, Flex, Image } from '@chakra-ui/react';
import HouseImg from '../../../../../assets/Multifamily_Night.png';

export const TopRankingProperties = () => {
  return (
    <Box>
      <Heading fontSize="md" fontWeight="bold">
        Your top ranking properties
      </Heading>
      <Box>
        <Flex>
          <Heading fontSize="xs" fontWeight="bold" w={16}>
            Prop
          </Heading>
          <Heading fontSize="xs" fontWeight="bold" w="calc(50% - 4rem)" px={3}>
            Address
          </Heading>
          <Heading textAlign="right" fontSize="xs" fontWeight="bold" w="25%">
            City
          </Heading>
          <Heading textAlign="right" fontSize="xs" fontWeight="bold" w="25%">
            Contribution
          </Heading>
        </Flex>

        <Flex alignItems="center" mt={2}>
          <Image w={16} src={HouseImg} alt="property_img" />

          <Heading fontSize="sm" w="calc(50% - 4rem)" px={3}>
            2972 Westheimer...
          </Heading>

          <Heading textAlign="right" fontSize="sm" w="25%">
            Cambridge
          </Heading>
          <Heading textAlign="right" fontSize="sm" w="25%">
            $20,000
          </Heading>
        </Flex>

        <Flex alignItems="center" mt={2}>
          <Image w={16} src={HouseImg} alt="property_img" />

          <Heading fontSize="sm" w="calc(50% - 4rem)" px={3}>
            13 Linden St.
          </Heading>

          <Heading textAlign="right" fontSize="sm" w="25%">
            Somerville
          </Heading>
          <Heading textAlign="right" fontSize="sm" w="25%">
            $16,000
          </Heading>
        </Flex>

        <Flex alignItems="center" mt={2}>
          <Image w={16} src={HouseImg} alt="property_img" />

          <Heading fontSize="sm" w="calc(50% - 4rem)" px={3}>
            32 Berkshire Rd.
          </Heading>

          <Heading textAlign="right" fontSize="sm" w="25%">
            Cambridge
          </Heading>
          <Heading textAlign="right" fontSize="sm" w="25%">
            $12,000
          </Heading>
        </Flex>

        <Flex alignItems="center" mt={2}>
          <Image w={16} src={HouseImg} alt="property_img" />

          <Heading fontSize="sm" w="calc(50% - 4rem)" px={3}>
            141 Jackson St.
          </Heading>

          <Heading textAlign="right" fontSize="sm" w="25%">
            Cambridge
          </Heading>
          <Heading textAlign="right" fontSize="sm" w="25%">
            $22,000
          </Heading>
        </Flex>
        <Box border="1px" textAlign="center" my={6}>
          <Heading fontSize="md">See all (8)</Heading>
        </Box>
      </Box>
    </Box>
  );
};
