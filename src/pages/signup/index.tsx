import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useHistory, Route, useLocation, Switch } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { retrieveState, storeState } from '../../lib/utils';
import { signupRoutes } from '../../lib/signupRoutes';

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

export const StepFormContext = React.createContext<ContextType>({});

function formReducer(state: formStateType, action: ActionType) {
  switch (action.type) {
    case 'update-form':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function Signup() {
  const [step, setStep] = useState<number>(1);
  const [formState, dispatch] = useReducer(formReducer, retrieveState('signup_state'));
  const history = useHistory();
  const location = useLocation();

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  console.log('reaching ...');

  const nextStep = () => {
    const index = signupRoutes.find((x) => x.path === location.pathname)?.id as number;
    if (index === 11) {
      history.push('/');
    } else {
      history.push(signupRoutes[index + 1]?.path);
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
        {signupRoutes.map(({ Component, path }) => (
          <Route
            path={path}
            exact
            key={path}
            render={() => <Component {...handlers} nextStep={nextStep} prevStep={prevStep} />}
          />
        ))}
      </Switch>
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
// export default Signup;
