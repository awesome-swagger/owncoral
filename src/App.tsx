// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import AppRootStyle from './AppRootStyle';
import AppTheme from './theme/chakra';
import { HeaderStyles } from './theme/typographyStyles';

import { Login } from './pages/login';
import Signup from './pages/signup';

// eslint-disable-next-line no-empty-pattern
export const App = (props: {}) => {
  return (
    <ChakraProvider theme={AppTheme}>
      <Global styles={[AppRootStyle, HeaderStyles]} />
      <Router>
        {/* {debugProfile} */}
        {/* <Global styles={makeRootStyle(theme)} /> */}
        {/* Server handles not-logged-in redirection */}
        <Switch>
          {/* <Route exact path="/" component={Portfolio} /> */}

          <Route exact path="/login">
            <Login /> {/* setUser={setUser} */}
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* /!* TODO: Redirect not-signed-up users to signup *!/ */}

          {/* <Route exact path="/portfolio" component={Portfolio} /> */}

          {/* <Route exact path="/properties/:id" component={Property} /> */}

          {/* <Route exact path="/new-opportunities" component={Opportunity} /> */}

          {/* <Route exact path="/documents" component={Docs} /> */}

          {/* <Route exact path="/new-opportunities/:id" component={OpportunityDetail} /> */}
        </Switch>
      </Router>
    </ChakraProvider>
  );
};
