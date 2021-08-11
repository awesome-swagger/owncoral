import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { BoxLightBorder } from '../../../../../components';

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
      <TabPanel px="0">
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
          <BoxLightBorder textAlign="center" cursor="pointer">
            <Heading fontWeight="bold" fontSize="sm">
              What’s this?
            </Heading>
          </BoxLightBorder>
        </Box>
      </TabPanel>
      <TabPanel px="0">
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
          <BoxLightBorder textAlign="center" cursor="pointer">
            <Heading fontWeight="bold" fontSize="sm">
              What’s this?
            </Heading>
          </BoxLightBorder>
        </Box>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
