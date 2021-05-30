import type { PortfolioPropertyDetailT } from '../../../../../shared-fullstack/types';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

import { DetailsTab } from './detailsTab';
import { FinanceTab } from './financeTab';
import { NewsTab } from './newsTab';

type TabSectionPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
};
export const TabSection = ({
  propertyDetail,
  propertyUriFragmentToId,
  adminSelectedUser,
}: TabSectionPropsT) => (
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
          <FinanceTab
            propertyDetail={propertyDetail}
            propertyUriFragmentToId={propertyUriFragmentToId}
            adminSelectedUser={adminSelectedUser}
          />
        </TabPanel>
        <TabPanel px="0">
          <DetailsTab propertyDetail={propertyDetail} />
        </TabPanel>
        <TabPanel px="0">
          <NewsTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
