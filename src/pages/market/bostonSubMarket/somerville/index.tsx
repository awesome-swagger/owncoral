import { useHistory } from 'react-router';
import { Text, Divider, Flex, Center, Box, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { Container, BackBtn } from '../../../../components';
import { Title1, Title2, Headline } from '../../../../components/text';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineWarning } from 'react-icons/ai';
import { useScrollToTop } from '../../../../lib/useScrollToTop';

const HighLightsList = [
  {
    icon: FiCheck,
    heading: 'High renter population',
    description: '66% renders in Somerville',
  },
  {
    icon: FiCheck,
    heading: 'Highly educated',
    description:
      '/th most educated city in America; 70.4% Bachelor degree or higher vs. 31.1% US; high density of  colleges and universities',
  },
  {
    icon: FiCheck,
    heading: 'High median household income',
    description: '$91k HHI in Somerville vs. 62k US',
  },
  {
    icon: FiCheck,
    heading: 'Low unemployment rate',
    description: '$91k HHI in Somerville vs 62k US',
  },
];

export const Somerville = () => {
  const history = useHistory();
  const iconWarningColor = useColorModeValue('yellow.400', 'yellow.200');
  const iconColor = useColorModeValue('green.400', 'green.200');
  const descColor = useColorModeValue('dark.400', 'whiteAlpha.800');

  const handleBack = () => history.goBack();

  useScrollToTop();

  return (
    <Container>
      <BackBtn handleClick={handleBack} />
      <Title1 my={4}>Somerville</Title1>
      <Text>
        Demand in Boston-Cambridge for lab space far exceeds supply. As a result, Somerville is
        becoming the next hot lab cluster with over 1.5 million square feet of lab in development,
        including both ground-up and office conversions (office vacancies becoming new lab space).
      </Text>
      <Divider my={4} />
      <Title2 my={4}>High demand from high quality tenants</Title2>
      <Text>
        Young professionals in tech/biotech and grad students tend to make up the majority of
        tenants. Cambridge has a growing population (mostly renters), of highly educated, high
        earners.
      </Text>
      {HighLightsList.map(({ icon, heading, description }) => (
        <Flex my={6}>
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
      <Divider my={4} />
      <Title2 my={4}>High Demand from High Quality Tenants</Title2>
      <Text>
        Outside of a small commercial district packed with biotech/tech, Somerville permits a very
        limited units per lot for new construction, which ultimately limits the supply of housing.
      </Text>
      <Flex my={6}>
        <Center borderRadius="xl" layerStyle="card" h={8} minW={8} mr={4}>
          <Icon as={AiOutlineWarning} h={4} w={4} color={iconWarningColor} />
        </Center>
        <Box>
          <Headline>Strict Limits on Units of New Builds</Headline>
          <Text textStyle="Body2" color={descColor}>
            3 Linden and its neighbors (zoning Neighborhood Residential)  are subject to a dwelling
            unit limit of max 3 per lot. And all the buildings are limited to maximum 3 storeys.{' '}
            <span style={{ fontWeight: 600 }}>
              This means this area does not allow high rise buildings.
            </span>
          </Text>
        </Box>
      </Flex>
      <Box my={6}>
        <Text fontSize="12px" color={descColor}>
          Sources: Wallethub,{' '}
          <Link textDecoration="underline" href="Rate.com" isExternal>
            Rate.com
          </Link>
          ,{' '}
          <Link textDecoration="underline" href="Zumper.com" isExternal>
            Zumper.com
          </Link>
          , Somerville Zoning, US bureau of labor, US census bureau
        </Text>
      </Box>
    </Container>
  );
};
