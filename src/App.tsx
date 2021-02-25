import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import AppRootStyle from './AppRootStyle';
import { fetchWrap } from './lib/api';
import AppTheme from './theme';
import { h1, h2, h3, h4, h5, h6 } from './theme/textStyles';
import type { User } from './userContext';
import { UserContext } from './userContext';
import DebugPanel from './components/debugPanel';

import Signup from './pages/signup';
import Portfolio from './pages/portfolio';
import { LoginFlow } from './pages/login/steps';

const headerStyles = { h1, h2, h3, h4, h5, h6 };

function App() {
  const [user, setUser] = useState<User>(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ChakraProvider theme={AppTheme}>
        <Global styles={[AppRootStyle, headerStyles]} />
        <DebugPanel />
        <Router>
          {/* Note: server handles not-logged-in redirection for the SPA bundle */}
          <Switch>
            <LoginFlow /> {/* setUser={setUser} */}
            <Signup />
            {/* /!* TODO: Redirect not-signed-up users to signup *!/ */}
            <Route exact path="/">
              {/* TODO: redirect to a dashboard */}
              <Redirect to="/portfolio" />
            </Route>
            <Route exact path="/portfolio" component={Portfolio} />
            {/* <Route exact path="/properties/:id" component={Property} /> */}
            {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}
            {/* <Route exact path="/documents" component={Docs} /> */}
            {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
          </Switch>
        </Router>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

async function getUser(setUser: (u: User) => void): Promise<void> {
  const resp = await fetchWrap('/api/currentUser');

  if (resp.ok) {
    setUser(await resp.json());
  }
}

// eslint-disable-next-line import/no-default-export
export default App;
