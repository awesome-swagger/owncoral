import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import Login from './pages/login';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

// eslint-disable-next-line no-empty-pattern
function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          {/* {debugProfile} */}
          {/* <Global styles={makeRootStyle(theme)} /> */}
          {/* Server handles not-logged-in redirection */}
          <Switch>
            {/* <Route exact path="/" component={Portfolio} /> */}

            <Route exact path="/login">
              <Login /> {/* setUser={setUser} */}
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
      </div>
    </ChakraProvider>
  );
}

export default App;
