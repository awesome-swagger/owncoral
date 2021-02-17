import React, { useReducer, useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";
import Result from "./steps/Step11";

interface formStateType {
  [key: string]: any;
}

interface ContextType {
  formState?: formStateType;
  dispatch?: React.Dispatch<any>;
}

const StepFormContext = React.createContext<ContextType>({});

function formReducer(state: formStateType, action: any) {
  switch (action) {
    case "update-form":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const Signup = () => {
  const [step, setStep] = useState<number>(1);
  const [formState, dispatch] = useReducer(formReducer, {});

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      {step === 1 ? (
        <Step1 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 2 ? (
        <Step2 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 3 ? (
        <Step3 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 4 ? (
        <Step4 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 5 ? (
        <Step5 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 6 ? (
        <Step6 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 7 ? (
        <Step7 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 8 ? (
        <Step8 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 9 ? (
        <Step9 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 10 ? (
        <Step10 nextStep={nextStep} prevStep={prevStep} />
      ) : step === 11 ? (
        <Result nextStep={nextStep} prevStep={prevStep} />
      ) : (
        ""
      )}
    </StepFormContext.Provider>
  );
};

export default Signup;
