import { forwardRef, useContext, useCallback, useEffect, useState } from 'react';
import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
  InputMaskField,
} from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';
type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const SsnOrEin = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const [ssnNumber, setSsnNumber] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = useCallback(() => {
    if (!ssnNumber.includes('_') && ssnNumber.length !== 0) {
      form.dispatch({
        type: 'update-form',
        payload: { step4: { ssnNumber } },
      });
      nextStep();
    } else {
      setError(true);
    }
  }, [ssnNumber]);

  useEffect(() => {
    const formState = form.formState;

    setSsnNumber(formState?.step4?.ssnNumber || '');
  }, []);

  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
          What’s your SSN or EIN?
        </HeadingTypography>
        <TextTypography fontSize="md" textAlign="left">
          Lorem ipsum dolor sir amet
        </TextTypography>
        <InputMaskField
          className={error ? 'mask_input shake_animation' : 'mask_input'}
          name="Ssn_Or_Ein"
          mask="999-99-9999"
          value={ssnNumber}
          onChange={(e: any) => {
            setSsnNumber(e.target.value);
            setError(false);
          }}
        />
        <TextTypography mt={2} color="red">
          {error ? 'Please enter a valid SSN number' : ''}
        </TextTypography>
        <SubmitBtn onClick={onSubmit} label="Continue" />
      </Container>
    </div>
  );
});
