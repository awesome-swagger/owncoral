import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';

export const TabSection = () => (
  <Tabs>
    <TabList>
      <Tab>
        <Heading fontSize="md">5 year hold</Heading>
      </Tab>
      <Tab>
        <Heading fontSize="md">10 year hold</Heading>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Box layerStyle="card" m="2" p={4} w={40}>
          <Heading layerStyle="highlightForeground" fontSize="xs">
            Rental yield
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            7%
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="sm">
            Great business, fair price
          </Heading>
          <Box border="1px" textAlign="center" cursor="pointer" layerStyle="lightBorder">
            <Heading fontWeight="bold" fontSize="sm">
              What’s this?
            </Heading>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel>
        <Box layerStyle="card" m="2" p={4} w={40}>
          <Heading layerStyle="highlightForeground" fontSize="xs">
            Rental yield
          </Heading>
          <Heading fontSize="2xl" m="0" fontWeight="bold">
            10%
          </Heading>
          <Heading layerStyle="highlightForeground" w="100%" fontSize="sm">
            Great business, fair price
          </Heading>
          <Box border="1px" textAlign="center" cursor="pointer" layerStyle="lightBorder">
            <Heading fontWeight="bold" fontSize="sm">
              What’s this?
            </Heading>
          </Box>
        </Box>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
