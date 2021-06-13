import type React from 'react';
import { Fragment } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Container, NavBar } from '../../components';
import { Title1 } from '../../components/text';
import ComingSoon from '../coming-soon';
import { GlossaryTab } from './glossary/GlossaryTab';

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
        <TabPanel>
          <ComingSoon isPage={false} />
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
