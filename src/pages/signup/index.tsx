import React, { useEffect, useReducer, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import { retrieveState, storeState } from '../../lib/utils';
import {
  BirthDate,
  CreateAccount,
  InvestmentExperience,
  InvestmentGoal,
  Investor,
  Name,
  NetWorth,
  Residency,
  Result,
  VerifyEmail,
  WelcomeCoral,
} from './steps';

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

function Signup() {
  const [step, setStep] = useState<number>(1);
  const [formState, dispatch] = useReducer(formReducer, retrieveState('signup_state'));

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextStep = () => {
    if (step === 11) console.log('This is the last page');
    else setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 1) console.log('This is the first page');
    else setStep(step - 1);
  };

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState, 'signup_state');
  }, [formState]);

  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      {step === 1 ? (
        <Residency nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 2 ? (
        <Name nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 3 ? (
        <BirthDate nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 4 ? (
        <Investor nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 5 ? (
        <CreateAccount nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 6 ? (
        <VerifyEmail nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 7 ? (
        <WelcomeCoral nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 8 ? (
        <InvestmentGoal nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 9 ? (
        <NetWorth nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 10 ? (
        <InvestmentExperience nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 11 ? (
        <Result nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : (
        ''
      )}
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default Signup;
