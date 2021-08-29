import { useHistory } from 'react-router';
import { Text, Divider, Flex, Center, Box, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { Container, BackBtn } from '../../../../components';
import { Title1, Title2 } from '../../../../components/text';
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
  const iconWarningColor = useColorModeValue('#FFB13C', '#FFB13CE6');
  const iconColor = useColorModeValue('#2CC99A', '#2CC99AE6');
  const descColor = useColorModeValue('#545656', '#FFFFFFCC');

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
            <Text fontWeight="600">{heading}</Text>
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
          <Text fontWeight="600">Strict Limits on Units of New Builds</Text>
          <Text textStyle="Body2" color={descColor}>
            3 Linden and its neighbors (zoning Neighborhood Residential)  are subject to a dwelling
            unit limit of max 3 per lot. And all the buildings are limited to maximum 3 storeys.{' '}
            <span style={{ fontWeight: 600 }}>
              This means this area does not allow high rise buildings.
            </span>
          </Text>
        </Box>
      </Flex>
      <Box layerStyle="card" borderRadius="2xl">
        <Text p={4}>
          The existing building at 258 Prospect, built prior to this regulation, has FAR around 1.8,
          and is grandfathered in.
        </Text>
      </Box>
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
