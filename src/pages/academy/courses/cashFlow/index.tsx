import { Fragment, MouseEventHandler, useState } from 'react';

import { Container, NavBar } from '../../../../components';
import { BackToProperty, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from './steps';

const CourseCashFlow = ({
  handleClose,
  wrapper = true,
}: {
  handleClose: MouseEventHandler;
  wrapper?: boolean;
}) => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const StepComp = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, BackToProperty][step];

  return wrapper ? (
    <Fragment>
      <NavBar />
      <Container
        minH={{ base: 'calc(100vh - 4rem)' }}
        h={{ base: 'auto', md: '700px' }}
        pb={{ base: 20 }}
      >
        <StepComp
          prevStep={prevStep}
          nextStep={nextStep}
          handleClose={() => (window.location.href = '/academy')} // eslint-disable-line no-return-assign
        />
      </Container>
    </Fragment>
  ) : (
    <StepComp prevStep={prevStep} nextStep={nextStep} handleClose={handleClose} />
  );
};

// eslint-disable-next-line import/no-default-export
export default CourseCashFlow;
