import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading } from '@chakra-ui/react';

import { TabPanel1 } from './tabPanel1';
import { TabPanel2 } from './tabPanel2';
import { TabPanel3 } from './tabPanel3';

export const TabSection = ({ data }: { data: any }) => (
  <Box>
    <Tabs>
      <TabList>
        <Tab>
          <Heading fontSize="md">Finance</Heading>
        </Tab>
        <Tab>
          <Heading fontSize="md">Property details</Heading>
        </Tab>
        <Tab>
          <Heading fontSize="md">News</Heading>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel px="0">
          <TabPanel1 data={data} />
        </TabPanel>
        <TabPanel px="0">
          <TabPanel2 data={data} />
        </TabPanel>
        <TabPanel px="0">
          <TabPanel3 data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
