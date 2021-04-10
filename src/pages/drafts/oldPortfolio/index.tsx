import React, { Fragment, lazy, Suspense, useContext, useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Link as BrowserLink } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link as ChakraLink,
  Spinner,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { format as formatDate } from 'date-fns';

import lowPolyHouseSm from '../../../assets/low-poly-1-still-sm.png';
import { NavBar } from '../../../components';
import { formatFinancial } from '../../../lib/financialFormatter';
import theme from '../../../theme';
import type { UserT } from '../../../userContext';
import { UserContext } from '../../../userContext';
import { PortfolioChart } from './chart';
import type { PropertyDataT } from './fetchData';
import { fetchAllUsersAdmin, fetchPortfolio } from './fetchData';

// TODO: make responsive
function Portfolio() {
  // TODO: clean up colors
  const color = useColorModeValue('black', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const primary = useColorModeValue('primary.500', 'primary.400');
  const secondary = useColorModeValue('secondary.500', 'secondary.400');
  // Based on: https://material.io/design/environment/elevation.html#default-elevations
  // and https://material.io/design/color/dark-theme.html#properties
  const toast = useToast();

  const [user] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<string | null>(user.id);
  const [adminUserList, setAdminUserList] = useState<any[] | null>(null);
  const [portfolio, setPortfolio] = useState<PropertyDataT[] | null>(null);
  const [AdminPanel, setAdminPanel] = useState<any>(null);

  // First, get all users (if we're an admin)
  useEffect(() => {
    fetchAllUsersAdmin({ setIsAdminLoading, setAdminUserList, toast });
  }, []);

  // Portfolio depends on the selected user (or current user)
  useEffect(() => {
    fetchPortfolio({ selectedUser, setPortfolio, setIsLoading, toast });
  }, [selectedUser]);

  // If current user is admin, load the AdminPanel component lazily
  useEffect(() => {
    if (user.isAdmin) {
      setAdminPanel(lazy(() => import('./AdminPanel')));
    }
  }, [user]);

  return (
    <Fragment>
      <NavBar />
      {adminPanelFragment({
        AdminPanel,
        isAdminLoading,
        user,
        selectedUser,
        setSelectedUser,
        adminUserList,
      })}
      <Center pos="relative">
        <Flex
          direction="column"
          align="center"
          w="100%"
          maxW={theme.breakpoints.sm}
          paddingX={[3, 4, 6]}
        >
          <Heading size="md" m={0} mt={2}>
            Portfolio
          </Heading>
          <Box
            shadow="xs"
            maxW={400}
            borderRadius="xl"
            mt={3}
            p={6}
            layerStyle="muiCardColorAlwaysOn"
          >
            <Center>
              <VStack>
                <Box textAlign="center">
                  You received{' '}
                  <Box as="span" layerStyle="highlightForeground" fontWeight="bold" textStyle="h5">
                    {portfolio === null ? (
                      <Spinner />
                    ) : (
                      '$' +
                      formatFinancial(
                        sum(portfolio.map((property) => property.monthlyDistribution || 0)),
                      )
                    )}
                  </Box>{' '}
                  last month
                  <br />
                  out of{' '}
                  <Box as="span" layerStyle="highlightForeground" fontWeight="bold">
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
            {portfolio === null ? (
              <Spinner />
            ) : portfolio.length > 0 ? (
              portfolio.map((property: PropertyDataT) => (
                <PropertyCard
                  key={property.uriAddress}
                  property={property}
                  highlightForeground="highlightForeground"
                  layerStyle="muiCardColorActiveAlwaysOn"
                />
              ))
            ) : (
              <Fragment>
                <Heading as="h6" size="xs">
                  You have no investments yet
                </Heading>
                <ChakraLink as={BrowserLink} to="/new-opportunities" color={primary}>
                  View Opportunities
                </ChakraLink>
              </Fragment>
            )}
          </VStack>
        </Flex>
      </Center>
    </Fragment>
  );
}

const sum = (ns: number[]) => ns.reduce((a, b) => a + b, 0);

const adminPanelFragment = ({
  AdminPanel,
  user,
  selectedUser,
  setSelectedUser,
  adminUserList,
  isAdminLoading,
}: {
  AdminPanel: any;
  user: UserT;
  selectedUser: string | null;
  setSelectedUser: (userId: string) => void;
  adminUserList: any[] | null;
  isAdminLoading: boolean;
}) => {
  const spinner = <Spinner />;
  if (user.isAdmin) {
    return (
      <Suspense fallback={spinner}>
        {AdminPanel === null ? (
          spinner
        ) : (
          <AdminPanel
            {...{
              isAdminLoading,
              selectedUser,
              setSelectedUser,
              userList: adminUserList,
            }}
          />
        )}
      </Suspense>
    );
  }

  return null;
};

type PropertyCardProps = {
  property: PropertyDataT;
  highlightForeground: string;
  layerStyle: string;
};

function PropertyCard(props: PropertyCardProps) {
  const { property, highlightForeground, layerStyle } = props;

  return (
    <Box
      as={BrowserLink}
      paddingY={[4, 6]}
      paddingX={[7, 9, 7]}
      mb={3}
      borderRadius="lg"
      width="100%"
      key={property.uriAddress}
      shadow="xs"
      sx={{ transition: 'all 0.1s' }}
      to={`/property/${property.uriAddress}`}
      layerStyle={layerStyle}
    >
      <Flex width="100%" mb={2}>
        <Heading size="xs" as="h6" m={0} flexGrow={1}>
          {property.name}
        </Heading>
        <Box textAlign="right">
          <HStack>
            <Icon as={FiMapPin} />
            &nbsp;
            <Text>
              {property.cityLocality}, {property.stateRegion}
            </Text>
          </HStack>
        </Box>
      </Flex>
      <Flex alignItems="top" justifyItems="stretch">
        <Center width={120} marginY={-4} marginLeft={-2} mr={5}>
          <VStack>
            <Image
              src={lowPolyHouseSm}
              alt={`${property.name} (stylized)`}
              fallback={<Spinner />}
            />
          </VStack>
        </Center>
        <Flex direction="column" width="100%">
          <Flex textAlign="center" direction="row">
            <Box flexGrow={1} mb={3}>
              {property.monthlyDistribution ? (
                <Fragment>
                  <Text textStyle="h6" m={0} layerStyle={highlightForeground}>
                    ${formatFinancial(property.monthlyDistribution)}
                  </Text>
                  {/* TODO: Actual Date */}
                  <Text textStyle="caption">last paid {formatDate(new Date(), `MMM yyyy`)}</Text>
                </Fragment>
              ) : (
                <Text variant="colored" colorScheme="gray">
                  N/A
                </Text>
              )}
            </Box>

            <Box flexGrow={1}>
              {property.totalDistribution ? (
                <Text textStyle="h6" m={0} layerStyle={highlightForeground}>
                  ${formatFinancial(property.totalDistribution)}
                </Text>
              ) : (
                <Text variant="colored" colorScheme="gray">
                  N/A
                </Text>
              )}
              <Text textStyle="caption">total to-date</Text>
            </Box>
          </Flex>

          <Center>
            <Text textStyle="subTitle1">
              <Box as="span" textStyle="h6" layerStyle={highlightForeground}>
                ${formatFinancial(property.totalContribution)}
              </Box>
              &nbsp; initial investment
            </Text>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}

// eslint-disable-next-line import/no-default-export
export default Portfolio;
