import { Fragment, lazy } from 'react';
import { Redirect, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { Container, NavBar, ProtectedRoute } from '../../components';
import { Title1 } from '../../components/text';

import { Courses } from './courses';
import { Disclosure } from './disclosure';
import { Glossary } from './glossary';

const CourseDetail = lazy(() => import('./courses/courseDetail'));
const CourseCashFlow = lazy(() => import('./courses/cashFlow'));
const CourseFinanacingWithCommercial = lazy(
  () => import('./courses/financingWithCommercial'),
);
const CourseOwnershipStructure = lazy(
  () => import('./courses/ownershipStructure')
);
const CourseRealizingAppreciation = lazy(
  () => import('./courses/realizingAppreciation'),
);

const GlossaryDetail = lazy(() => import('./glossary/glossaryDetail'));

const Error404 = lazy(() => import('../error404'));

const Academy = () => {
  const { url: academyUrl } = useRouteMatch();
  const history = useHistory();
  const handleClick = (route: string) => history.push(academyUrl + '/' + route);

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Switch>
          <ProtectedRoute exact path={academyUrl}>
            <Redirect to={academyUrl + "/courses"} />
          </ProtectedRoute>
          
          <ProtectedRoute exact path={academyUrl + "/:tab"}>
            <AcademyTabs handleClick={handleClick} />
          </ProtectedRoute>

          <ProtectedRoute exact path={academyUrl + "/glossary/:title"} component={GlossaryDetail} />

          <ProtectedRoute exact path={academyUrl + "/courses/:title"} component={CourseDetail} />

          <ProtectedRoute exact path={academyUrl + "/unit/cash-flow"}>
            <Redirect to={academyUrl + "/unit/cash-flow/1"} />
          </ProtectedRoute>
          <ProtectedRoute
            path={academyUrl + "/unit/cash-flow/:title"}
            component={CourseCashFlow}
          />

          <ProtectedRoute exact path={academyUrl + "/unit/realizing-appreciation-without-selling"}>
            <Redirect to={academyUrl + "/unit/realizing-appreciation-without-selling/1"} />
          </ProtectedRoute>
          <ProtectedRoute
            path={academyUrl + "/unit/realizing-appreciation-without-selling/:title"}
            component={CourseRealizingAppreciation}
          />

          <ProtectedRoute exact path={academyUrl + "/unit/financing-with-commercial-loans"}>
            <Redirect to={academyUrl + "/unit/financing-with-commercial-loans/1"} />
          </ProtectedRoute>
          <ProtectedRoute
            path={academyUrl + "/unit/financing-with-commercial-loans/:title"}
            component={CourseFinanacingWithCommercial}
          />
          
          <ProtectedRoute exact path={academyUrl + "/unit/ownership-structure"}>
            <Redirect to={academyUrl + "/unit/ownership-structure/1"} />
          </ProtectedRoute>
          <ProtectedRoute
            path={academyUrl + "/unit/ownership-structure/:title"}
            component={CourseOwnershipStructure}
          />

          <ProtectedRoute path="*">
            <Error404 isComponent />
          </ProtectedRoute>
        </Switch>
      </Container>
    </Fragment>
  );
}

const AcademyTabs = ({
  handleClick 
} : {
  handleClick: (route: string) => void 
}) => {
  const { tab } = useParams<{ tab: string }>();

  const tabs = ['courses', 'glossary', 'disclosure'];
  const tabIndex = tabs.indexOf(tab);
  if (tabIndex === -1) return (<Error404 isComponent />);

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
