import React, { useEffect, useReducer, useState } from "react";
import { Residency } from "./steps/Residency";
import { Name } from "./steps/Name";
import { BirthDate } from "./steps/BirthDate";
import { Investor } from "./steps/Investor";
import { CreateAccount } from "./steps/CreateAccount";
import { VerifyEmail } from "./steps/VerifyEmail";
import { WelcomeCoral } from "./steps/WelcomeCoral";
import { InvestmentGoal } from "./steps/InvestmentGoal";
import { NetWorth } from "./steps/NetWorth";
import { InvestmentExperience } from "./steps/InvestmentExperience";
import { Result } from "./steps/Result";
import { useSwipeable } from "react-swipeable";
import { retrieveState, storeState } from "../../lib/utils";

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

export const StepFormContext = React.createContext<ContextType>({});

function formReducer(state: formStateType, action: ActionType) {
  switch (action.type) {
    case "update-form":
      const newState = { ...state, ...action.payload };

      return newState;
    default:
      return state;
  }
}

const Signup = () => {
  // const { register, handleSubmit} = useForm();
  const [step, setStep] = useState<number>(1);
  const [formState, dispatch] = useReducer(formReducer, retrieveState());
  console.log("form submit data", formState);
  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState);
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
        <InvestmentExperience
          nextStep={nextStep}
          prevStep={prevStep}
          {...handlers}
        />
      ) : step === 11 ? (
        <Result nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : (
        ""
      )}
    </StepFormContext.Provider>
  );
};

export default Signup;
