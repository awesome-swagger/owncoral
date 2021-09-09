import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Container, NavBar } from '../../components';
import { Title1 } from '../../components/text';
import { Courses } from './courses';
import { Glossary } from './glossary';
import { Disclosures } from './disclosures';

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

  const handleClick = (route: string) => history.push(`/academy/${route}`);

  return (
    <Box>
      <Title1 mb={4}>Academy</Title1>
      <Tabs defaultIndex={tab === 'glossary' ? 1 : 0}>
        <TabList>
          <Tab onClick={() => handleClick('courses')}>Crash Courses</Tab>
          <Tab onClick={() => handleClick('glossary')}>Glossary</Tab>
          <Tab onClick={() => handleClick('disclosures')}>Disclosures</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Courses />
          </TabPanel>
          <TabPanel p="0">
            <Glossary />
          </TabPanel>
          <TabPanel p="0">
            <Disclosures p="0" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default Academy;
