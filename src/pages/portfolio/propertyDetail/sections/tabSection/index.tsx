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

const tabData = [
  { name: 'News', Component: NewsTab },
  { name: 'Property details', Component: DetailsTab },
  { name: 'Coral plan', Component: CoralPlanTab },
];

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

          {tabData.map(({ name }, idx) => (
            <Tab key={idx} px={2} py={6}>
              <Text whiteSpace="nowrap" textStyle="Headline">
                {name}
              </Text>
            </Tab>
          ))}
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
          {tabData.map(({ Component }, idx) => (
            <TabPanel key={idx} px="0">
              <Suspense fallback={fallback}>
                <Component propertyDetail={propertyDetail} />
              </Suspense>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
