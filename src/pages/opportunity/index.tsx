import { Fragment } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format as formatDate } from 'date-fns';

import lowPolyHouseLg from '../../assets/low-poly-1.gif';
import { BackBtn } from '../../components';
import { NavBar } from '../../components/navBar';
import { Title2 } from '../../components/text';
import { propertyData } from '../../lib/fakePropertyData';
import { formatFinancial } from '../../lib/financialFormatter';
import theme from '../../theme';
import type { PropertyDataT } from '../drafts/oldPortfolio/fetchData';
import { PropertyTable } from './PropertyTable';

function Property() {
  const { address: uriAddress } = useParams<{ address: string }>();
  const property: PropertyDataT | undefined = propertyData.find(
    (property) => property.uriAddress === uriAddress,
  );
  const history = useHistory();

  return !property ? null : (
    <Fragment>
      <NavBar>
        <HStack align="center">
          <BackBtn handleClick={() => history.push('/portfolio')} />
          <VStack>
            <Heading as="h6" size="xs" m={0} isTruncated>
              {property.name}
            </Heading>
          </VStack>
        </HStack>
      </NavBar>

      <Center>
        <Box maxW={theme.breakpoints.md}>
          <Image
            marginLeft="auto"
            marginRight="auto"
            w="50%"
            src={lowPolyHouseLg}
            alt={`${property.name} stylized picture`}
            fallback={<Spinner />}
          />
        </Box>
      </Center>

      <Center>
        <VStack w="85%" minW="340px" maxW={theme.breakpoints.md} paddingX={[3, 4, 6]}>
          <Flex justify="space-between" w="100%">
            <VStack align="left">
              <Title2>{property.name}</Title2>
              <HStack spacing={1}>
                <Icon as={FiMapPin} />
                <Text textStyle="Body2" verticalAlign="middle">
                  {property.cityLocality}, {property.stateRegion}
                </Text>
              </HStack>
            </VStack>
            <VStack align="right" textAlign="right">
              <Text textStyle="Body2">Initial Investment</Text>
              <Title2 colorScheme="primary" variant="colored">
                ${formatFinancial(property.contribution)}
              </Title2>
              <Text textStyle="Body2">
                on {formatDate(property.contributionDate, 'MM/dd/yyyy')}
              </Text>
            </VStack>
          </Flex>
          <Box h={4} />
          <Tabs isLazy variant="enclosed" align="end">
            <TabList>
              <Tab>Last Month</Tab>
              <Tab>Since Purchase</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <PropertyTable property={property} period="last" />
              </TabPanel>
              <TabPanel p={0}>
                <PropertyTable property={property} period="total" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Center>
    </Fragment>
  );
}

// eslint-disable-next-line import/no-default-export
export default Property;
