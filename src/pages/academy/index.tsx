import React, { Fragment } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Container, NavBar } from '../../components';
import { Title1 } from '../../components/text';
import { GlossaryTab } from './glossary/GlossaryTab';
import { Courses } from './courses';

function Academy() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <AcademyTabs />
      </Container>
    </Fragment>
  );
}

const AcademyTabs = () => (
  <Box>
    <Title1 my={4}> Academy </Title1>
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Crash Courses</Tab>
        <Tab>Glossary</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0">
          <Box>
            <Courses />
          </Box>
        </TabPanel>
        <TabPanel>
          <GlossaryTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default Academy;
