import { Box, Center, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FiBook, FiPlusSquare, FiSearch } from 'react-icons/fi';
import { Headline, Title2 } from '../../../../components/text';

const HighLightsList = [
  {
    icon: FiBook,
    heading: 'Leading Research Institutions',
    description:
      "Over local 50 universities, including Harvard and MIT. In addition to driving innovation, these institutions supply one of Massachusetts' greatest natural resources, talent.", // editorconfig-checker-disable-line
  },
  {
    icon: FiPlusSquare,
    heading: 'Top Research Hospitals',
    description:
      "Like Massachusetts General Hospital, Dana-Farber Cancer Institute, Brigham & Women’s Hospital, Beth Israel Deaconess Medical Center.", // editorconfig-checker-disable-line
  },
  {
    icon: FiSearch,
    heading: 'Top Biotech and Biopharma Companies',
    description:
      "Nearly 1k, from incubators and startups to large companies; 19 of the 20 largest biotech + pharma companies have a presence in Greater Boston", // editorconfig-checker-disable-line
  },
];

export const Highlights = () => {
  const iconColor = useColorModeValue('black', 'white');
  const descColor = useColorModeValue('dark.400', 'whiteAlpha.800');

  return (
    <Box>
      <Title2>Highlights</Title2>
      {HighLightsList.map(({ icon, heading, description }, index) => (
        <Flex my={6} key={index}>
          <Center borderRadius="xl" layerStyle="card" h={8} minW={8} mr={4}>
            <Icon as={icon} h={4} w={4} color={iconColor} />
          </Center>
          <Box>
            <Headline>{heading}</Headline>
            <Text textStyle="Body2" color={descColor}>
              {description}
            </Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
