import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

const AcademyTabs = () => {
  const { tab } = useParams<{ tab: string }>();
  const history = useHistory();
  console.log(tab);
  return (
    <Box>
      <Title1 my={4}> Academy </Title1>
      <Tabs defaultIndex={tab === 'courses' ? 0 : 1}>
        <TabList>
          <Tab onClick={() => history.push('/academy/courses')}>Crash Courses</Tab>
          <Tab onClick={() => history.push('/academy/glossary')}>Glossary</Tab>
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
};

// eslint-disable-next-line import/no-default-export
export default Academy;
