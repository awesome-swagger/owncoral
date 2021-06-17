import { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Container, NavBar } from '../../components';
import { Title1 } from '../../components/text';
import ComingSoon from '../coming-soon';
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
      <Title1 my={4}> Academy </Title1>
      <Tabs defaultIndex={tab === 'courses' ? 0 : 1}>
        <TabList>
          <Tab onClick={() => history.push('/academy/courses')}>Crash Courses</Tab>
          <Tab onClick={() => history.push('/academy/glossary')}>Glossary</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            {import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' ? (
              <Courses />
            ) : (
              <ComingSoon isPage={false} />
            )}
          </TabPanel>
          <TabPanel>
            <Glossary />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default Academy;
