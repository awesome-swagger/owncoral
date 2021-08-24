import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { FiBook, FiSearch, FiPlusSquare } from 'react-icons/fi';
import { Title2 } from '../../../../components/text';

const HighLightsList = [
  {
    icon: FiBook,
    heading: 'Leading Research Institutions',
    description:
      "Over local 50 universities, including Harvard and MIT. In addition to driving innovation, these institutions supply one of Massachusetts' greatest natural resources, talent.",
  },
  {
    icon: FiPlusSquare,
    heading: 'Top Research Hospitals',
    description:
      'Like Massachusetts General Hospital, Dana-Farber Cancer Institute, Brigham & Women’s Hospital, Beth Israel Deaconess Medical Center.',
  },
  {
    icon: FiSearch,
    heading: 'Top Biotech and Biopharma Companies',
    description:
      'Nearly 1k, from incubators and startups to large companies; 19 of the 20 largest biotech + pharma companies have a presence in Greater Boston',
  },
];

export const Highlights = () => {
  return (
    <Box>
      <Title2>Highlights</Title2>
      {HighLightsList.map(({ icon, heading, description }) => (
        <Flex my={6}>
          <Center borderRadius="xl" layerStyle="card" h={8} minW={8} mr={4}>
            <Icon as={icon} h={4} w={4} />
          </Center>
          <Box>
            <Text fontWeight="600">{heading}</Text>
            <Text textStyle="Body2">{description}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
