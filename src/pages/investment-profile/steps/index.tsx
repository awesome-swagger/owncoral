import React, { createContext, lazy, useCallback, useEffect, useReducer } from 'react';
import { Redirect, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { ProtectedRoute } from '../../../components';
import { retrieveState, storeState } from '../../../lib/utils';
import { investmentProfileRoutes } from '../investmentProfileRoutes';
const Error404 = lazy(() => import('../../error404'));

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

function InvestmentProfileFlow() {
  const [formState, dispatch] = useReducer(formReducer, retrieveState('login_state'));
  const { url: investmentRootUrl } = useRouteMatch();
  const history = useHistory();

  const createNextStep = (currStep: number) => () => {
    if (currStep + 1 === investmentProfileRoutes.length) {
      history.push('/');
    } else {
      history.push(investmentRootUrl + investmentProfileRoutes[currStep + 1]?.path);
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
        <ProtectedRoute exact path={investmentRootUrl}>
          <Redirect to={investmentRootUrl + investmentProfileRoutes[0].path} />
        </ProtectedRoute>
        {investmentProfileRoutes.map(({ Component, path }, currStep) => (
          <ProtectedRoute exact path={investmentRootUrl + path} key={path}>
            <Component nextStep={createNextStep(currStep)} prevStep={prevStep} />
          </ProtectedRoute>
        ))}
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default InvestmentProfileFlow;
