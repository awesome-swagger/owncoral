/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useEffect, useState } from 'react';
import { css, jsx, Global, ThemeProvider, Theme } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppTheme } from './AppTheme';
import Docs from './pages/docs';
import Login from './pages/login';
import Portfolio from './pages/portfolio';
import Property from './pages/property';
import Opportunity from './pages/opportunity';
import OpportunityDetail from './pages/opportunity-detail';
import Signup from './pages/signup';
import SignUpFlow from './pages/signup/signupflow';

import { HeaderStyles } from './TypographyStyles';

import { fetchWrap } from './Utils';
import type { User } from './SharedTypes';

const makeRootStyle = (theme: Theme) => css`
  :root {
    /* Theme colors */
    --main-color: rgb(70, 170, 60);
    --alt-color: rgb(41, 133, 60);
    --contrast-color: rgb(33, 33, 33);
    --light-color: white;
  }

  * {
    color: inherit;
    text-transform: inherit;
  }

  a {
    text-decoration: none;
  }

  html {
    //overscroll-behavior: none;
    // https://css-tricks.com/international-box-sizing-awareness-day/
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.bg};
    color: ${theme.colors.fg};
    min-width: 320px; /* small iPhone */
    overscroll-behavior: none;
    ${theme.textStyles.bodyText1}
  }

  ${HeaderStyles}

  html {
    // We size text at 80% at 320px, and 90% at 768px
    font-size: calc(80% + clamp(0%, 1.6 * ((100vw - 320px) / 448), 10%));
  }
`;

const UserContext = React.createContext<User>(null);

const getUser = async (setUser: (u: User) => void): Promise<void> => {
  const resp = await fetchWrap('/api/currentUser');

  if (resp.ok) {
    setUser(await resp.json());
  }
};

const App = () => {
  const [user, setUser] = useState<User>(null);

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDarkMode, setDarkMode] = useState(mq.matches);
  mq.addEventListener('change', (evt) => {
    setDarkMode(evt.matches);
  });
  const theme = AppTheme(isDarkMode);

  useEffect(() => {
    getUser(setUser);
  }, []);

  const debugProfile =
    process.env.NODE_ENV === 'development' ? (
      <div
        css={css`
          background-color: rgba(0, 0, 0, 0);
          display: inline-block;
          pointer-events: none;
          position: fixed;
          bottom: 20px;
          width: 200px;
          left: 20px;
          color: darkred;
          z-index: 100;
          user-select: none;
          text-align: center;
        `}
      >
        <pre>{(user || {}).email ? 'Profile loaded: ' + (user || {}).email : 'No profile loaded'}</pre>
      </div>
    ) : (
      <Fragment />
    );

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <Router>
          {debugProfile}
          <Global styles={makeRootStyle(theme)} />
          {/* Server handles not-logged-in redirection */}
          <Switch>
            <Route exact path="/" component={Portfolio} />

            <Route exact path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signupflow" component={SignUpFlow} />

            {/* TODO: Redirect not-signed-up users to signup */}

            <Route exact path="/portfolio" component={Portfolio} />

            <Route exact path="/properties/:id" component={Property} />

            <Route exact path="/new-opportunities" component={Opportunity} />

            <Route exact path="/documents" component={Docs} />

            <Route exact path="/new-opportunities/:id" component={OpportunityDetail} />
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
