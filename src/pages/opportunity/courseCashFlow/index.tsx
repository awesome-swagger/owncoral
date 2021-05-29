import React, { useState } from 'react';
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, BackToProperty } from './steps';

const CourseCashFlow = ({ handleClose }: { handleClose: React.MouseEventHandler }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const stepComponent = (st: number) => {
    switch (st) {
      case 1:
        return <Step1 handleClose={handleClose} nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 4:
        return <Step4 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 5:
        return <Step5 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 6:
        return <Step6 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 7:
        return <Step7 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      case 8:
        return <Step8 nextStep={nextStep} prevStep={prevStep} handleClose={handleClose} />;
      default:
        return <BackToProperty handleClose={handleClose} prevStep={prevStep} />;
    }
  };

  return stepComponent(step);
};

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
