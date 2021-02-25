import { useState, useEffect, useReducer, createContext, useCallback } from 'react';
import { useHistory, Route } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { retrieveState, storeState } from '../../../lib/utils';
import { loginRoutes } from '../../../lib/loginRoutes';

export type DivRef = HTMLDivElement;
export type FormRef = HTMLFormElement;

interface formStateType {
  [key: string]: any;
}

export interface ContextType {
  formState?: formStateType;
  dispatch?: any;
}

interface ActionType {
  type: string;
  payload: { [key: string]: any };
}
export const StepFormContext = createContext<ContextType>({});

function formReducer(state: formStateType, action: ActionType) {
  switch (action.type) {
    case 'update-form':
      const newState = { ...state, ...action.payload };

      return newState;
    default:
      return state;
  }
}

export const LoginFlow = () => {
  const [formState, dispatch] = useReducer(formReducer, retrieveState('login_state'));
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextStep = () => {
    const index = loginRoutes.find((x) => x.path === location.pathname)?.id as number;
    if (index === 17) {
      history.push('/');
    } else {
      history.push(loginRoutes[index + 1]?.path);
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
      {loginRoutes.map(({ Component, path }) => (
        <Route
          path={path}
          exact
          key={path}
          render={() => <Component {...handlers} nextStep={nextStep} prevStep={prevStep} />}
        />
      ))}
    </StepFormContext.Provider>
  );
};
