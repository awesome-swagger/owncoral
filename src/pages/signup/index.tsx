/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from '@emotion/react';
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
import Step11 from "./steps/Step11";

const Signup = () => {
  const [step, setStep] = useState<number>(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
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
        <Step11 nextStep={nextStep} prevStep={prevStep} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Signup;
