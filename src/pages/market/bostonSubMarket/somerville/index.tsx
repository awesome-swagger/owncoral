import { FiAlertTriangle, FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Text, Divider, Flex, Center, Box, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, Container } from '../../../../components';
import { Headline, Title1, Title2 } from '../../../../components/text';
import { useScrollToTop } from '../../../../lib/useScrollToTop';

const HighLightsList = [
  {
    icon: FiCheck,
    headings: ['High renter population'],
    description: '66% renders in Somerville',
  },
  {
    icon: FiCheck,
    headings: ['Highly educated'],
    description:
      '/th most educated city in America; 70.4% Bachelor degree or higher vs. 31.1% US; high density of  colleges and universities', // editorconfig-checker-disable-line
  },
  {
    icon: FiCheck,
    headings: ['High median household income', 'Low unemployment rate'],
    description: '$91k HHI in Somerville vs. 62k US',
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
      {HighLightsList.map(({ icon, headings, description }) => (
        headings.map(heading => (
          <Flex my={6} key={heading}>
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
        ))
      ))}
      <Divider my={4} />
      <Title2 my={4}>High Demand from High Quality Tenants</Title2>
      <Text>
        Outside of a small commercial district packed with biotech/tech, Somerville permits a very
        limited units per lot for new construction, which ultimately limits the supply of housing.
      </Text>
      <Flex my={6}>
        <Center borderRadius="xl" layerStyle="card" h={8} minW={8} mr={4}>
          <Icon as={FiAlertTriangle} h={4} w={4} color={iconWarningColor} />
        </Center>
        <Box>
          <Headline>Strict Limits on Units of New Builds</Headline>
          <Text textStyle="Body2" color={descColor}>
            3 Linden and its neighbors (zoning Neighborhood Residential) are subject to a dwelling
            unit limit of max 3 per lot. And all the buildings are limited to maximum 3 storeys.
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
