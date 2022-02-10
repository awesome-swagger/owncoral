import { FiAlertTriangle, FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Text, Divider, Flex, Center, Box, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, Container } from '../../../../components';
import { Headline, Title1, Title2 } from '../../../../components/text';
import { useScrollToTop } from '../../../../lib/useScrollToTop';

const HighLightsList = [
  {
    icon: FiCheck,
    headings: ['Strong Population Growth'],
    description: '1.2% Cambridge vs 0.6% US (1)',
  },
  {
    icon: FiCheck,
    headings: ['High Renter Population'],
    description: '65% renters in Cambridge (2)',
  },
  {
    icon: FiCheck,
    headings: ['Highly Educated', 'High Median Household Income'],
    description:
      '7th most educated city in America(3) ; 76.5% bachelor’s degree or higher(4); high density of colleges and universities', // editorconfig-checker-disable-line
  },
  {
    icon: FiCheck,
    headings: ['Low Long-Term Unemployment Rate'],
    description: '3.5% Cambridge vs 5.8% US (5)',
  },
];
const References = [
  { heading: 'US Census Bureau' },
  { heading: 'as of Feb 08 2021', link: 'Zumper.com' },
  { heading: 'Wallethub' },
  { link: 'Rate.com' },
  { heading: 'Bureau of Labor Statistics' },
  { link: 'www.cambridgema.gov' },
];

export const Cambridge = () => {
  const history = useHistory();
  const iconWarningColor = useColorModeValue('yellow.400', 'yellow.200');
  const iconColor = useColorModeValue('green.400', 'green.200');
  const descColor = useColorModeValue('dark.400', 'whiteAlpha.800');

  const handleBack = () => history.goBack();

  useScrollToTop();

  return (
    <Container>
      <BackBtn handleClick={handleBack} />
      <Title1 my={4}>Cambridge</Title1>
      <Text>
        Cambridge and Kendall Square remain the epicenter of global life sciences research, with
        nearly 11 million square feet in existing lab inventory. Vacancy rates for laboratory space
        have been near 0% for 3+ years. With both Harvard and MIT in Cambridge, this area has an
        incredible talent advantage.
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
      <Title2 my={4}>Constrained Supply</Title2>
      <Text>
        Outside of a small commercial district packed with biotech/tech, Cambridge permits a very
        small Floor Area Ratio (FAR) for new construction, which ultimately limits the supply of
        housing.
      </Text>
      <Flex my={6}>
        <Center borderRadius="xl" layerStyle="card" h={8} minW={8} mr={4}>
          <Icon as={FiAlertTriangle} h={4} w={4} color={iconWarningColor} />
        </Center>
        <Box>
          <Headline>Residential Zoning - FAR</Headline>
          <Text textStyle="Body2" color={descColor}>
            258 Prospect and its neighbors (C1 zoning) are subject to a FAR limit of 0.75(6). This
            means the building&apos;s total floor area (gross floor area) cannot exceed 75% of the area
            of the land it sits on.
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
        {References.map(({ heading, link }, index: number) => (
          <Text fontSize="12px" color={descColor} key={index}>
            ({index + 1}){' '}
            <Link textDecoration="underline" isExternal href={`https://${link}`}>
              {link}
            </Link>{' '}
            {heading}
          </Text>
        ))}
      </Box>
    </Container>
  );
};
