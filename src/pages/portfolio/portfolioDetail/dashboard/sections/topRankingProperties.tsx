import { Heading, Box, Flex, Image } from '@chakra-ui/react';
import { RankingProperties } from '../../../../../lib/rankingProperties';
export const TopRankingProperties: React.FC = () => {
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

        {RankingProperties.map((data) => (
          <Flex alignItems="center" mt={2}>
            <Image w={16} src={data.img} alt="property_img" />

            <Heading fontSize="sm" w="calc(50% - 4rem)" px={3} isTruncated>
              {data.address}
            </Heading>

            <Heading textAlign="right" fontSize="sm" w="25%">
              {data.city}
            </Heading>
            <Heading textAlign="right" fontSize="sm" w="25%">
              {data.contribution}
            </Heading>
          </Flex>
        ))}
        <Box border="1px" textAlign="center" my={6} layerStyle="lightBorder">
          <Heading fontSize="md">See all (8)</Heading>
        </Box>
      </Box>
    </Box>
  );
};
