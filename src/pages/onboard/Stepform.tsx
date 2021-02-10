import React, { useState, useCallback } from "react";

type StepformProps = {
  step0: any,
  step1: any,
  step2: any,
  step3: any,
};
const Stepform: React.FC<StepformProps> = ({ step0, step1, step2, step3 }) => {
  const [step, setStep] = useState(0);

  const renderStep = useCallback(() => {
    switch (step) {
      case 0:
        return step0(setStep);
      case 1:
        return step1(setStep);
      case 2:
        return step2(setStep);
      case 3:
        return step3(setStep);
    }
  }, [step, step0, step1, step2, step3]);

  return <div>{renderStep()}</div>;
};

export default Stepform;
