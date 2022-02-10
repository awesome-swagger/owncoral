import { lazy } from 'react';
import { Redirect, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Container, ProtectedRoute } from '../../components';
import { Title1 } from '../../components/text';
import {
  COURSE_CASH_FLOW_URL,
  FINANCING_WITH_COMMERCIAL_URL,
  OWNERSHIP_STRUCTURE_URL,
  REALIZING_APPRECIATION_URL,
} from '../../lib/courseDetailData';
import { Courses } from './courses';
import { Disclosure } from './disclosure';
import { Glossary } from './glossary';

const CourseDetail = lazy(() => import('./courses/courseDetail'));
const CourseCashFlow = lazy(() => import('./courses/cashFlow'));
const CourseFinanacingWithCommercial = lazy(() => import('./courses/financingWithCommercial'));
const CourseOwnershipStructure = lazy(() => import('./courses/ownershipStructure'));
const CourseRealizingAppreciation = lazy(() => import('./courses/realizingAppreciation'));

const GlossaryDetail = lazy(() => import('./glossary/glossaryDetail'));

const Error404 = lazy(() => import('../error404'));

const Academy = () => {
  const { url: academyUrl } = useRouteMatch();
  const history = useHistory();
  const handleClick = (route: string) => history.push(academyUrl + '/' + route);

  return (
    <Container>
      <Switch>
        <ProtectedRoute exact path={academyUrl}>
          <Redirect push to={academyUrl + '/courses'} />
        </ProtectedRoute>

        <ProtectedRoute exact path={academyUrl + '/:tab'}>
          <AcademyTabs handleClick={handleClick} />
        </ProtectedRoute>

        <ProtectedRoute exact path={academyUrl + '/glossary/:title'} component={GlossaryDetail} />

        <ProtectedRoute exact path={academyUrl + '/courses/:title'}>
          <CourseDetail academyUrl={academyUrl} />
        </ProtectedRoute>

        <ProtectedRoute exact path={academyUrl + COURSE_CASH_FLOW_URL}>
          <Redirect to={academyUrl + COURSE_CASH_FLOW_URL + '/get-started'} />
        </ProtectedRoute>
        <ProtectedRoute
          path={academyUrl + COURSE_CASH_FLOW_URL + '/:title'}
          component={CourseCashFlow}
        />

        <ProtectedRoute exact path={academyUrl + REALIZING_APPRECIATION_URL}>
          <Redirect to={academyUrl + REALIZING_APPRECIATION_URL + '/get-started'} />
        </ProtectedRoute>
        <ProtectedRoute
          path={academyUrl + REALIZING_APPRECIATION_URL + '/:title'}
          component={CourseRealizingAppreciation}
        />

        <ProtectedRoute exact path={academyUrl + FINANCING_WITH_COMMERCIAL_URL}>
          <Redirect to={academyUrl + FINANCING_WITH_COMMERCIAL_URL + '/get-started'} />
        </ProtectedRoute>
        <ProtectedRoute
          path={academyUrl + FINANCING_WITH_COMMERCIAL_URL + '/:title'}
          component={CourseFinanacingWithCommercial}
        />

        <ProtectedRoute exact path={academyUrl + OWNERSHIP_STRUCTURE_URL}>
          <Redirect to={academyUrl + OWNERSHIP_STRUCTURE_URL + '/get-started'} />
        </ProtectedRoute>
        <ProtectedRoute
          path={academyUrl + OWNERSHIP_STRUCTURE_URL + '/:title'}
          component={CourseOwnershipStructure}
        />

        <ProtectedRoute path="*">
          <Error404 isComponent />
        </ProtectedRoute>
      </Switch>
    </Container>
  );
};

const AcademyTabs = ({ handleClick }: { handleClick: (route: string) => void }) => {
  const { tab } = useParams<{ tab: string }>();

  const tabs = ['courses', 'glossary', 'disclosure'];
  const tabIndex = tabs.indexOf(tab);
  if (tabIndex === -1) return <Error404 isComponent />;

  return (
    <Box>
      <Title1 mb={4}>Academy</Title1>
      <Tabs defaultIndex={tabIndex}>
        <TabList>
          <Tab onClick={() => handleClick(tabs[0])}>Crash Courses</Tab>
          <Tab onClick={() => handleClick(tabs[1])}>Glossary</Tab>
          <Tab onClick={() => handleClick(tabs[2])}>Disclosure</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Courses />
          </TabPanel>
          <TabPanel p="0">
            <Glossary />
          </TabPanel>
          <TabPanel p="0">
            <Disclosure />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default Academy;
