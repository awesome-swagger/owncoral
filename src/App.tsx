import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import AppRootStyle from './AppRootStyle';
import { fetchWrap } from './lib/api';
import AppTheme from './theme';
import { h1, h2, h3, h4, h5, h6 } from './theme/textStyles';
import type { UserT } from './userContext';
import { UserContext } from './userContext';

import { DebugPanel } from './components';

import Signup from './pages/signup';
import Portfolio from './pages/portfolio';
import Login from './pages/login';
import LoginFlow from './pages/investment-profile/steps';
import Profile from './pages/profile';

const headerStyles = { h1, h2, h3, h4, h5, h6 };

function App() {
  const [user, setUser] = useState<UserT>(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ChakraProvider theme={AppTheme}>
        <Global styles={[AppRootStyle, headerStyles]} />
        <DebugPanel />
        <Router>
          {/* Note: server handles not-logged-in redirection for the SPA bundle */}
          <Signup />
          <LoginFlow /> {/* setUser={setUser} */}
          {/* /!* TODO: Redirect not-signed-up users to signup *!/ */}
          <Route exact path="/">
            {/* TODO: redirect to a dashboard */}
            <Redirect to="/portfolio" />
          </Route>
          <Route exact path="/login">
            {/* TODO: redirect to a dashboard */}
            <Login />
          </Route>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/properties/:id" component={Property} /> */}
          {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}
          {/* <Route exact path="/documents" component={Docs} /> */}
          {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
        </Router>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

async function getUser(setUser: (u: UserT) => void): Promise<void> {
  const resp = await fetchWrap('/api/currentUser');

  if (resp.ok) {
    setUser(await resp.json());
  }
}

// eslint-disable-next-line import/no-default-export
export default App;
