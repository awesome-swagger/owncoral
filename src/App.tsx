import React, { lazy, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

import AppRootStyle from './AppRootStyle';
import {
  DebugPanel,
  ErrorFallback,
  Loading,
  MyErrorHandler,
  PropertyCard,
  ProtectedRoute,
  MapBox,
} from './components';
import AppTheme from './theme';
import { h1, h2, h3, h4, h5, h6 } from './theme/textStyles';
import { UserContext } from './userContext';
import { Dashboard } from './pages/portfolio/portfolioDetail/dashboard';
import { PortfolioMap } from './pages/portfolio/portfolioDetail/portfolioMap';
import { Dashboard2 } from './pages/portfolio/detail/dashboard';
import { PortfolioMap2 } from './pages/portfolio/detail/portfolioMap';
import { OverviewDashboard } from './pages/portfolio/overview/overviewDashboard';

const Login = lazy(() => import('./pages/login'));
const ForgotCheckEmail = lazy(() => import('./pages/login/ForgotCheckEmail'));
const ForgotPassword = lazy(() => import('./pages/login/ForgotPassword'));
const NewPassword = lazy(() => import('./pages/login/NewPassword'));

const Portfolio = lazy(() => import('./pages/portfolio'));
const Profile = lazy(() => import('./pages/profile'));
const Property = lazy(() => import('./pages/property'));
const InvestmentProfileFlow = lazy(() => import('./pages/investment-profile/steps'));
const Signup = lazy(() => import('./pages/signup'));
const PropertyDetail = lazy(() => import('./pages/property/propertyDetail'));
const Error404 = lazy(() => import('./pages/error404'));
const PortfolioDetail = lazy(() => import('./pages/portfolio/portfolioDetail'));
const PortfolioDetail2 = lazy(() => import('./pages/portfolio/detail'));
const Overview = lazy(() => import('./pages/portfolio/overview'));
const OverviewPropertyDetail = lazy(() => import('./pages/portfolio/overview/overviewDetail'));
const PortfolioPropertyDetail = lazy(
  () => import('./pages/portfolio/detail/portfolioPropertyDetail'),
);

const headerStyles = { h1, h2, h3, h4, h5, h6 };

function App() {
  const [user, setUser] = useState(null);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={MyErrorHandler}>
      <UserContext.Provider value={[user, setUser]}>
        <ChakraProvider theme={AppTheme}>
          <Global styles={[AppRootStyle, headerStyles]} />
          <DebugPanel />
          <Suspense fallback={<Loading />}>
            <Router>
              <Switch>
                {/* Note: server handles not-logged-in redirection for the SPA bundle */}
                {authRoutes}
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/investment-profile">
                  <InvestmentProfileFlow />
                </Route>
                <ProtectedRoute exact path="/">
                  <Redirect to="/portfolio" />
                </ProtectedRoute>
                <ProtectedRoute exact path="/portfolio" component={Portfolio} />

                {/* Portfolio Overview Route */}
                <ProtectedRoute exact path="/portfolio/overview" component={PortfolioDetail2} />
                <ProtectedRoute exact path="/portfolio/overview/dashboard" component={Dashboard2} />
                <ProtectedRoute exact path="/portfolio/overview/map" component={PortfolioMap2} />
                <ProtectedRoute
                  exact
                  path="/portfolio/overview/property-detail"
                  component={PortfolioPropertyDetail}
                />

                <ProtectedRoute exact path="/property/:address" component={Property} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/property-card" component={PropertyCard} />
                <ProtectedRoute exact path="/property-detail" component={PropertyDetail} />
                <ProtectedRoute exact path="/portfolio-detail" component={PortfolioDetail} />
                <ProtectedRoute exact path="/portfolio-detail/dashboard" component={Dashboard} />

                <ProtectedRoute
                  exact
                  path="/portfolio-detail/portfolio-map"
                  component={PortfolioMap}
                />

                <ProtectedRoute exact path="/overview" component={Overview} />
                <ProtectedRoute exact path="/overview/dashboard" component={OverviewDashboard} />
                <ProtectedRoute
                  exact
                  path="/overview/property-detail"
                  component={OverviewPropertyDetail}
                />

                <ProtectedRoute exact path="/map-box" component={MapBox} />

                <ProtectedRoute path="*" component={Error404} />
                {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}
                {/* <Route exact path="/documents" component={Docs} /> */}
                {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
              </Switch>
            </Router>
          </Suspense>
        </ChakraProvider>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}

const authRoutes = [
  <Route exact path="/login" key="/login">
    <Login />
  </Route>,
  <Route exact path="/forgot" key="/forgot">
    <ForgotPassword />
  </Route>,
  <Route exact path="/forgot-check-email" key="/forgot-check-email">
    <ForgotCheckEmail />
  </Route>,
  <Route exact path="/new-password/:resetToken" key="/new-password/:resetToken">
    <NewPassword />
  </Route>,
  <Route exact path="/welcome-to-coral/:resetToken" key="/welcome-to-coral/:resetToken">
    <NewPassword isWelcome />
  </Route>,
];

// eslint-disable-next-line import/no-default-export
export default App;
