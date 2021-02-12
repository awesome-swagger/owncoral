/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment, useEffect, useState } from "react";
import { css, jsx, Global, ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./shared/theme";
import Docs from "./pages/docs";
import Login from "./pages/login";
import Portfolio from "./pages/portfolio";
import Property from "./pages/property";
import Opportunity from "./pages/opportunity";
import OpportunityDetail from "./pages/opportunity-detail";
import Signup from "./pages/signup";

import OnBoard from "./pages/onboard";

import "./styles.css";

import { fetchWrap } from "./Utils";
import type { User } from "./SharedTypes";
import SignUpFlow from "./pages/signup/signupflow";

const rootStyle = css`
  :root {
    /* Theme colors */
    --main-color: rgb(70, 170, 60);
    --alt-color: rgb(41, 133, 60);
    --contrast-color: rgb(33, 33, 33);
    --light-color: white;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    background-color: rgba(250, 250, 250);
    font-family: "Nunito", Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    min-width: 320px; /* small iPhone */
  }

  * {
    color: var(--dark-color);
  }

  /* reset */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }
`;

const UserContext = React.createContext<User>(null);

const getUser = async (setUser: (u: User) => void): Promise<void> => {
  const resp = await fetchWrap("/api/currentUser");

  if (resp.ok) {
    setUser(await resp.json());
  }
};

const App = () => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    getUser(setUser);
  }, []);

  const debugProfile =
    process.env.NODE_ENV === "development" ? (
      <div
        css={{
          position: "absolute",
          top: "5",
          left: "5",
          color: "darkRed",
          width: 200,
          zIndex: 100,
        }}
      >
        <pre>Profile is ${JSON.stringify(user, null, 2)}</pre>
      </div>
    ) : (
      <Fragment />
    );

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <Router>
          {debugProfile}
          <Global styles={rootStyle} />
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

            <Route
              exact
              path="/new-opportunities/:id"
              component={OpportunityDetail}
            />

            <Route exact path="/onboard" component={OnBoard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
