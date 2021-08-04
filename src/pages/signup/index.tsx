import React, { lazy, useCallback, useEffect, useReducer } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { ProtectedRoute } from '../../components';
import { retrieveState, storeState } from '../../lib/utils';
import { signupRoutes } from './signupRoutes';
const Error404 = lazy(() => import('../error404'));

export type DivRef = HTMLDivElement;
export type FormRef = HTMLFormElement;

type FormStateT = {
  [key: string]: any;
};

export type ContextT = {
  formState?: FormStateT;
  dispatch?: any;
};

export type StepPropsT = {
  nextStep: () => void;
  prevStep: () => void;
}

type ActionT = {
  type: string;
  payload: { [key: string]: any };
};

export const StepFormContext = React.createContext<ContextT>({});

function formReducer(state: FormStateT, action: ActionT) {
  switch (action.type) {
    case 'update-form':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function SignupFlow() {
  const [formState, dispatch] = useReducer(formReducer, retrieveState('signup_state'));
  const { url: signupRootUrl } = useRouteMatch();
  const history = useHistory();

  const createNextStep = (currStep: number) => () => {
    if (currStep + 1 === signupRoutes.length) {
      history.push('/');
    } else {
      history.push(signupRootUrl + signupRoutes[currStep + 1]?.path);
    }
  };
  const prevStep = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState, 'signup_state');
  }, [formState]);

  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      <Switch>
        <Route exact path={signupRootUrl}>
          <Redirect to={signupRootUrl + signupRoutes[0].path} />
        </Route>
        {signupRoutes.map(({ component: SignupComponent, path }, currStep) => (
          <Route exact path={signupRootUrl + path} key={path}>
            <SignupComponent nextStep={createNextStep(currStep)} prevStep={prevStep} />
          </Route>
        ))}
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default SignupFlow;
