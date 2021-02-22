import { useState, useEffect, useReducer, createContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { retrieveState, storeState } from '../../../lib/utils';
import { InformationMissing } from './InformationMissing';
import { ResidentialAddress } from './ResidentialAddress';
import { PhoneNumber } from './PhoneNumber';
import { SsnOrEin } from './SsnOrEin';
import { Invest } from './Invest';
import { EntityName } from './EntityName';
import { EntityType } from './EntityType';
import { TaxClasification } from './TaxClasification';
import { Ein } from './Ein';
import { Industry } from './Industry';
import { DateOfFormation } from './DateOfFormation';
import { JurisdictionRegistration } from './JurisdictionRegistration';
import { DateOfRegistration } from './DateOfRegistration';
import { CertificateOfRegistration } from './CertificateOfRegistration';
import { EntityAddress } from './EntityAddress';
import { EntityPhoneNumber } from './EntityPhoneNumber';
import { Result } from '../steps/Result';
import { useSwipeable } from 'react-swipeable';

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

export const Steps = () => {
  const [step, setStep] = useState(1);
  const [formState, dispatch] = useReducer(formReducer, retrieveState('login_state'));
  const history = useHistory();

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextStep = useCallback(() => {
    {
      step === 17 ? console.log('This is the last page') : setStep(step + 1);
    }
  }, [step]);

  const prevStep = useCallback(() => {
    {
      step === 1 ? history.goBack() : setStep(step - 1);
    }
  }, [step]);

  const gotoStep = useCallback((stepNumber: number) => setStep(stepNumber), [setStep]);

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState, 'login_state');
  }, [formState]);
  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      {step === 1 ? (
        <InformationMissing nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 2 ? (
        <ResidentialAddress nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 3 ? (
        <PhoneNumber nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 4 ? (
        <SsnOrEin nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 5 ? (
        <Invest nextStep={nextStep} prevStep={prevStep} gotoStep={gotoStep} {...handlers} />
      ) : step === 6 ? (
        <EntityName nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 7 ? (
        <EntityType nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 8 ? (
        <TaxClasification nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 9 ? (
        <Ein nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 10 ? (
        <Industry nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 11 ? (
        <DateOfFormation nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 12 ? (
        <JurisdictionRegistration nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 13 ? (
        <DateOfRegistration nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 14 ? (
        <CertificateOfRegistration nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 15 ? (
        <EntityAddress nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 16 ? (
        <EntityPhoneNumber nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 17 ? (
        <Result prevStep={prevStep} gotoStep={gotoStep} {...handlers} />
      ) : (
        ''
      )}
    </StepFormContext.Provider>
  );
};
