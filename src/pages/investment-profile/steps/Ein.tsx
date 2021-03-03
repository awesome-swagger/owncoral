import { forwardRef, useContext, useEffect, useCallback, useState } from 'react';

import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
  InputMaskField,
} from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Ein = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const [einNumber, setEinNumber] = useState('');
  const [error, setError] = useState(false);
  const form = useContext(StepFormContext);

  const onSubmit = useCallback(() => {
    if (!einNumber.includes('_') && einNumber.length !== 0) {
      form.dispatch({
        type: 'update-form',
        payload: { step9: { einNumber } },
      });
      nextStep();
    } else {
      setError(true);
    }
  }, [einNumber]);

  useEffect(() => {
    const formState = form.formState;

    setEinNumber(formState?.step9?.einNumber || '');
  }, []);
  return (
    <div ref={ref}>
      <Container>
        <BackBtn handleClick={prevStep} />
        <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
          What’s your EIN?
        </HeadingTypography>
        <TextTypography fontSize="md" textAlign="left">
          Lorem ipsum dolor sir amet
        </TextTypography>
        <InputMaskField
          placeholder="XX-XXXXXXX"
          className={error ? 'mask_input shake_animation' : 'mask_input'}
          name="ein"
          mask="99-9999999"
          value={einNumber}
          onChange={(e: any) => {
            setEinNumber(e.target.value);
            setError(false);
          }}
        />
        <TextTypography mt={2} color="red">
          {error ? 'Please enter a valid EIN number' : ''}
        </TextTypography>

        <SubmitBtn onClick={onSubmit} label="Continue" />
      </Container>
    </div>
  );
});
