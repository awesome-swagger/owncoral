import React, { useState } from 'react';
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, BackToProperty } from './steps';

const CourseCashFlow = ({ handleClose }: { handleClose: React.MouseEventHandler }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const StepComp = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, BackToProperty][step];

  return <StepComp prevStep={prevStep} nextStep={nextStep} handleClose={handleClose} />;
};

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
