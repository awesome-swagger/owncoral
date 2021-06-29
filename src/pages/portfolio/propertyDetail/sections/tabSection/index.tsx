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

const DetailsTab = lazy(() => import('./detailsTab'));
const FinanceTab = lazy(() => import('./financeTab'));
const NewsTab = lazy(() => import('./newsTab'));
import type React from 'react';
import { lazy, Suspense } from 'react';

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
      <Tabs>
        <TabList>
          <Tab>
            <Text textStyle="Headline">Performance</Text>
          </Tab>
          <Tab>
            <Text textStyle="Headline">Property details</Text>
          </Tab>
          <Tab>
            <Text textStyle="Headline">News</Text>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px="0">
            <Suspense fallback={fallback}>
              <FinanceTab
                propertyDetail={propertyDetail}
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
              <NewsTab />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
