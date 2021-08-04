import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Container, NavBar } from '../../components';
import { Title1 } from '../../components/text';
import { Courses } from './courses';
import { Glossary } from './glossary';

const Academy = () => (
  <Fragment>
    <NavBar />
    <Container>
      <AcademyTabs />
    </Container>
  </Fragment>
);

const AcademyTabs = () => {
  const { tab } = useParams<{ tab: string }>();
  const history = useHistory();

  return (
    <Box>
      <Title1 mb={4}>Academy</Title1>
      <Tabs defaultIndex={tab === 'glossary' ? 1 : 0}>
        <TabList>
          <Tab onClick={() => history.push('/academy/courses')}>Crash Courses</Tab>
          <Tab onClick={() => history.push('/academy/glossary')}>Glossary</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Courses />
          </TabPanel>
          <TabPanel p="0">
            <Glossary />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default Academy;
