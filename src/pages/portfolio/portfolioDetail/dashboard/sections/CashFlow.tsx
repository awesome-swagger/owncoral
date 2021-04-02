import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Flex,
  Divider,
} from '@chakra-ui/react';
import Chart from '../../../../../assets/Chart1.png';

export const CashFlow = () => (
  <Box>
    <Heading fontSize="2xl" fontWeight="bold">
      Cashflow
    </Heading>

    <Tabs>
      <TabList>
        <Tab>
          <Heading fontSize="md" m="0">
            Month/Year
          </Heading>
        </Tab>
        <Tab>
          <Heading fontSize="md" m="0">
            Cumulative
          </Heading>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Image src={Chart} alt="chart" w="100%" />
          <Flex justifyContent="space-between">
            <Heading fontSize="md">Avg Monthly distribution</Heading>
            <Heading fontSize="md">$4000</Heading>
          </Flex>
          <Divider my={4} />
          <Heading fontWeight="bold" fontSize="3xl" m="0">
            $400k
          </Heading>
          <Heading fontSize="sm">Total contribution</Heading>
          <Flex overflow="auto">
            <Box layerStyle="card" m="2" ml="0" p={4} w={40} minW={40}>
              <Heading layerStyle="highlightForeground" fontSize="sm">
                Return of capital
              </Heading>
              <Heading fontSize="2xl" m="0" fontWeight="bold">
                1.5%
              </Heading>
              <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
                Sed malesuada viverra in facilisi lectus metus
              </Heading>
            </Box>
            <Box layerStyle="card" m="2" p={4} w={40} minW={40}>
              <Heading layerStyle="highlightForeground" fontSize="sm">
                Cash-on-cash Return
              </Heading>
              <Heading fontSize="2xl" m="0" fontWeight="bold">
                4.5%
              </Heading>
              <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
                Lobortis non sit nunc hac sit sed
              </Heading>
            </Box>
            <Box layerStyle="card" m="2" p={4} w={40} minW={40}>
              <Heading layerStyle="highlightForeground" fontSize="sm">
                Return of capital
              </Heading>
              <Heading fontSize="2xl" m="0" fontWeight="bold">
                1.5%
              </Heading>
              <Heading layerStyle="highlightForeground" w="100%" fontSize="xs">
                Lobortis non sit nunc hac sit sed
              </Heading>
            </Box>
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);
