/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx, Global, ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./shared/theme";
import Login from "./pages/login";
import Portfolio from "./pages/portfolio";
import Property from "./pages/property";
import Opportunity from "./pages/opportunity";

import "./styles.css";

const rootStyle = css`
  :root {
    /* Theme colors */
    --main-color: rgb(70, 170, 60);
    --alt-color: rgb(41, 133, 60);
    --contrast-color: rgb(33, 33, 33);
    --light-color: white;∂
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Global styles={rootStyle} />

        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/portfolio" component={Portfolio} />

          <Route exact path="/properties/:id" component={Property} />
          <Route exact pateh="/new-opportunities" component={Opportunity} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
