import type React from 'react';
import { lazy, Suspense } from 'react';
import type { PortfolioPropertyDetailT } from '../../../../../shared-fullstack/types';
import {
  Box,
  Center,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

const CoralPlanTab = lazy(() => import('./coralPlanTab'));
const DetailsTab = lazy(() => import('./detailsTab'));
const FinanceTab = lazy(() => import('./financeTab'));
const NewsTab = lazy(() => import('./newsTab'));

type TabSectionPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
};
export const TabSection = ({
  propertyDetail,
  propertyUriFragmentToId,
  adminSelectedUser,
}: TabSectionPropsT) => {
  const fallback = (
    <Center>
      <Spinner />
    </Center>
  );

  return (
    <Box>
      <Tabs isLazy>
        <TabList>
          <Tab px={2} py={6}>
            <Text textStyle="Headline">Performance</Text>
          </Tab>
          <Tab px={2} py={6}>
            <Text textStyle="Headline">Property details</Text>
          </Tab>
          <Tab px={2} py={6}>
            <Text textStyle="Headline">Coral Plan</Text>
          </Tab>
          <Tab px={2} py={6}>
            <Text textStyle="Headline">News</Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px="0">
            <Suspense fallback={fallback}>
              <FinanceTab
                propertyUriFragmentToId={propertyUriFragmentToId}
                adminSelectedUser={adminSelectedUser}
              />
            </Suspense>
          </TabPanel>
          <TabPanel px="0">
            <Suspense fallback={fallback}>
              <DetailsTab propertyDetail={propertyDetail} />
            </Suspense>
          </TabPanel>
          <TabPanel px="0">
            <Suspense fallback={fallback}>
              <CoralPlanTab propertyDetail={propertyDetail} />
            </Suspense>
          </TabPanel>
          <TabPanel px="0">
            <Suspense fallback={fallback}>
              <NewsTab />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
