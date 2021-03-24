import React, { useState } from 'react';
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, BackToProperty } from './steps';

export const CourseCashFlow = ({ handleClose }: { handleClose: React.MouseEventHandler }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 1 ? (
        <Step1 handleClose={handleClose} nextStep={nextStep} />
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
      ) : (
        <BackToProperty handleClose={handleClose} prevStep={prevStep} />
      )}
    </>
  );
};
