import React, { useCallback, useEffect, useReducer } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { retrieveState, storeState } from '../../lib/utils';
import { signupRoutes } from './signupRoutes';

export type DivRef = HTMLDivElement;
export type FormRef = HTMLFormElement;

type FormStateT = {
  [key: string]: any;
};

export type ContextT = {
  formState?: FormStateT;
  dispatch?: any;
};

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

function Signup() {
  const [formState, dispatch] = useReducer(formReducer, retrieveState('signup_state'));
  const history = useHistory();

  const createNextStep = (currStep: number) => () => {
    if (currStep + 1 === signupRoutes.length) {
      history.push('/');
    } else {
      history.push(signupRoutes[currStep + 1]?.path);
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
        <Route path="/signup" exact key="/signup">
          <Redirect to={signupRoutes[0].path} />
        </Route>
        {signupRoutes.map(({ component: SignupComponent, path }, currStep) => (
          <Route path={path} exact key={path}>
            <SignupComponent nextStep={createNextStep(currStep)} prevStep={prevStep} />
          </Route>
        ))}
      </Switch>
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default Signup;
