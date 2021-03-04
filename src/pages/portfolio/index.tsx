import React, { Fragment } from 'react';
import { Box, Center, Flex, Image, useColorModeValue, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { format as formatDate } from 'date-fns';

import { PortfolioChart } from './chart';
import type { PropertyDataT } from './fakePropertyData';
import { propertyData } from './fakePropertyData';
import theme from '../../theme';
import lowPolyHouseSm from '../../assets/low-poly-1-still-sm.png';
import { formatFinancial } from '../../lib/financialFormatter';

import { NavBar, HeadingTypography, TextTypography } from '../../components';

// TODO: make responsive
function Portfolio() {
  // TODO: clean up colors
  const color = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const primary = useColorModeValue('primary.500', 'primary.400');
  const secondary = useColorModeValue('secondary.500', 'secondary.400');
  const highlightForeground = useColorModeValue('primary.800', 'primary.200');
  // Based on: https://material.io/design/environment/elevation.html#default-elevations
  // andhttps://material.io/design/color/dark-theme.html#properties
  const muiCardColor = useColorModeValue('inherit', 'rgba(255, 255, 255, 0.05)');
  const muiCardColorActive = useColorModeValue('inherit', 'rgba(255, 255, 255, 0.12)');

  return (
    <Fragment>
      <NavBar />
      <Center>
        <Flex
          direction="column"
          align="center"
          w="100%"
          maxW={theme.breakpoints.sm}
          paddingX={[3, 4, 6]}
        >
          <HeadingTypography size="md" m={0} mt={2}>
            Portfolio
          </HeadingTypography>
          <Box shadow="xs" maxW={400} borderRadius="xl" mt={3} p={6} bgColor={muiCardColor}>
            <Center>
              <VStack>
                <Box textAlign="center">
                  You received{' '}
                  <Box as="span" color={highlightForeground} fontWeight="bold" textStyle="h5">
                    $3,323
                  </Box>{' '}
                  last month
                  <br />
                  out of{' '}
                  <Box as="span" color={highlightForeground} fontWeight="bold">
                    $100k
                  </Box>{' '}
                  distributions to-date
                </Box>
              </VStack>
            </Center>

            <Center>
              {/* TODO: make responsive */}
              <PortfolioChart
                width={300}
                height={180}
                marginTop={10}
                marginBottom={20}
                marginLeft={40}
                marginRight={0}
                numYTicks={2}
                numXTicks={6}
                color={color}
                primaryColor={primary}
                secondaryColor={secondary}
                bgColor={bgColor}
              />
            </Center>
          </Box>
          <Box height={10} />
          <VStack width="100%">
            {propertyData.map((property: PropertyDataT) => (
              <PropertyCard
                key={property.uri}
                property={property}
                highlightForeground={highlightForeground}
                muiCardColor={muiCardColor}
                muiCardColorActive={muiCardColorActive}
              />
            ))}
          </VStack>
        </Flex>
      </Center>
    </Fragment>
  );
}

type PropertyCardProps = {
  property: PropertyDataT;
  highlightForeground: string;
  muiCardColor: string;
  muiCardColorActive: string;
};
function PropertyCard(props: PropertyCardProps) {
  const { property, highlightForeground, muiCardColor, muiCardColorActive } = props;

  return (
    <Box
      as={Link}
      paddingY={[4, 6]}
      paddingX={[7, 9, 7]}
      mb={3}
      borderRadius="lg"
      width="100%"
      key={property.uri}
      shadow="xs"
      _hover={{ shadow: 'md', bgColor: muiCardColorActive }}
      sx={{ transition: 'all 0.1s' }}
      to={property.uri}
      bgColor={muiCardColor}
    >
      <Flex width="100%" mb={2}>
        <HeadingTypography size="xs" m={0} flexGrow={1}>
          {property.name}
        </HeadingTypography>
        <Box textAslign="right">
          <TextTypography>
            {property.cityLocality}, {property.stateRegion}
          </TextTypography>
        </Box>
      </Flex>
      <Flex alignItems="top" justifyItems="stretch">
        <Center width={120} marginY={-4} marginLeft={-2} mr={5}>
          <VStack>
            <Image src={lowPolyHouseSm} alt="House stylized picture" />
          </VStack>
        </Center>
        <Flex direction="column" width="100%">
          <Flex textAlign="center" direction="row">
            <Box flexGrow={1} mb={3}>
              <TextTypography textStyle="h6" m={0} color={highlightForeground}>
                ${formatFinancial(property.distributionLast)}
              </TextTypography>
              <TextTypography textStyle="caption">
                last paid {formatDate(property.distributionLastDate, `MMM dd`)}
              </TextTypography>
            </Box>

            <Box flexGrow={1}>
              <TextTypography textStyle="h6" m={0} color={highlightForeground}>
                ${formatFinancial(property.distributionTotal)}
              </TextTypography>
              <TextTypography textStyle="caption">total to-date</TextTypography>
            </Box>
          </Flex>

          <Center>
            <TextTypography textStyle="subTitle1">
              <Box as="span" textStyle="h6" color={highlightForeground}>
                ${formatFinancial(property.contribution)}
              </Box>{' '}
              investment
            </TextTypography>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}

// eslint-disable-next-line import/no-default-export
export default Portfolio;
