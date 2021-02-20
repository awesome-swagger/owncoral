import { useState, useEffect, useReducer, createContext } from "react";
import { retrieveState, storeState } from "../../../lib/utils";
import { Step1 } from "../steps/Step1";
import { Step2 } from "../steps/Step2";
import { Step3 } from "../steps/Step3";
import { Step4 } from "../steps/Step4";
import { Step5 } from "../steps/Step5";
import { Step6 } from "../steps/Step6";
import { Step7 } from "../steps/Step7";
import { Step8 } from "../steps/Step8";
import { Step9 } from "../steps/Step9";
import { Step10 } from "../steps/Step10";
import { Step11 } from "../steps/Step11";
import { Step12 } from "../steps/Step12";
import { Step13 } from "../steps/Step13";
import { Step14 } from "../steps/Step14";
import { Step15 } from "../steps/Step15";
import { Step16 } from "../steps/Step16";
import { Result } from "../steps/Result";

import { useSwipeable } from "react-swipeable";

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
    case "update-form":
      const newState = { ...state, ...action.payload };

      return newState;
    default:
      return state;
  }
}

export const Steps = () => {
  const [step, setStep] = useState(1);
  const [formState, dispatch] = useReducer(
    formReducer,
    retrieveState("login_state")
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => nextStep(),
    onSwipedRight: () => prevStep(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextStep = () => {
    {
      step === 17 ? console.log("This is the last page") : setStep(step + 1);
    }
  };
  const prevStep = () => {
    {
      step === 1 ? console.log("This is the first page") : setStep(step - 1);
    }
  };

  useEffect(() => {
    /** store state at local storage as well for future use */
    storeState(formState, "login_state");
  }, [formState]);
  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      {step === 1 ? (
        <Step1 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 2 ? (
        <Step2 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 3 ? (
        <Step3 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 4 ? (
        <Step4 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 5 ? (
        <Step5 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 6 ? (
        <Step6 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 7 ? (
        <Step7 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 8 ? (
        <Step8 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 9 ? (
        <Step9 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 10 ? (
        <Step10 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 11 ? (
        <Step11 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 12 ? (
        <Step12 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 13 ? (
        <Step13 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 14 ? (
        <Step14 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 15 ? (
        <Step15 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 16 ? (
        <Step16 nextStep={nextStep} prevStep={prevStep} {...handlers} />
      ) : step === 17 ? (
        <Result prevStep={prevStep} {...handlers} />
      ) : (
        ""
      )}
    </StepFormContext.Provider>
  );
};
