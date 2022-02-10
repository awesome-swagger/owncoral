import React, { lazy, useCallback } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { ProtectedRoute } from '../../components';
import { signupRouteGraph } from './signupRoutes';
import { ResultAlmostThere } from './steps/ResultAlmostThere';

const Error404 = lazy(() => import('../error404'));

export type StepPropsT = {
  nextStep: (nextExit?: number) => void;
  prevStep: () => void;
};

/**
 * Overview
 *
 * 1. First check for accreditation. All state for these questions is
 *    local.
 * 2. If user is accredited, they set up a login and we start a session.
 * 3. Once they are logged in, we incrementally update the user_self
 *    view as they answer more questions.
 */
function SignupFlow() {
  const { url: signupRootUrl } = useRouteMatch();
  const history = useHistory();

  const createNextStep = (exits: Array<string>) => (exitNum = 0) => {
    if (exits.length === 0) {
      history.push('/');
    } else {
      history.push(signupRootUrl + '/' + exits[exitNum]);
    }
  };
  const prevStep = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Switch>
      <Route exact path={signupRootUrl}>
        <Redirect push to={signupRootUrl + '/name'} />
      </Route>
      {Object.keys(signupRouteGraph).map(
        (path) => {
          const RouteComponent = signupRouteGraph[path].isProtectedRoute ? ProtectedRoute : Route;
          const SignupComponent = signupRouteGraph[path].component;
          return (
            <RouteComponent exact path={signupRootUrl + '/' + path} key={path}>
              <SignupComponent nextStep={createNextStep(signupRouteGraph[path].next)} prevStep={prevStep} />
            </RouteComponent>
          );
        },
      )}
      <Route exact path={signupRootUrl + '/almost-there'}>
        <ResultAlmostThere />
      </Route>
      <Route path="*" component={Error404} />
    </Switch>
  );
}

// eslint-disable-next-line import/no-default-export
export default SignupFlow;
