import { createContext, useCallback, useEffect, useReducer } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { retrieveState, storeState } from '../../../lib/utils';
import { loginRoutes } from '../loginRoutes';

export type DivRef = HTMLDivElement;
export type FormRef = HTMLFormElement;

type formStateType = {
  [key: string]: any;
};

export type ContextType = {
  formState?: formStateType;
  dispatch?: any;
};

type ActionType = {
  type: string;
  payload: { [key: string]: any };
};
export const StepFormContext = createContext<ContextType>({});

function formReducer(state: formStateType, action: ActionType) {
  switch (action.type) {
    case 'update-form':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const LoginFlow = () => {
  const [formState, dispatch] = useReducer(formReducer, retrieveState('login_state'));
  const history = useHistory();

  const createNextStep = (currStep: number) => () => {
    if (currStep + 1 === loginRoutes.length) {
      history.push('/');
    } else {
      history.push(loginRoutes[currStep + 1]?.path);
    }
  };
  const prevStep = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState, 'login_state');
  }, [formState]);

  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      <Switch>
        {loginRoutes.map(({ Component, path }, currStep) => (
          <Route path={path} exact key={path}>
            <Component nextStep={createNextStep(currStep)} prevStep={prevStep} />
          </Route>
        ))}
      </Switch>
    </StepFormContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default LoginFlow;
