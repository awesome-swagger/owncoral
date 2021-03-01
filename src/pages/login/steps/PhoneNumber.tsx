import { forwardRef, useContext, useCallback, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import {
  BackBtn,
  Container,
  SubmitBtn,
  HeadingTypography,
  TextTypography,
} from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const PhoneNumber = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);
    const form = useContext(StepFormContext);

    const onSubmit = useCallback(() => {
      if (!phoneNumber.includes('_') && phoneNumber.length !== 0) {
        form.dispatch({
          type: 'update-form',
          payload: { step3: { phoneNumber } },
        });
        nextStep();
      } else {
        setError(true);
      }
    }, [phoneNumber]);

    useEffect(() => {
      const formState = form.formState;
      setPhoneNumber(formState?.step3?.phoneNumber || '');
    }, []);
    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            What’s your phone number?
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left">
            Enter your US phone number
          </TextTypography>
          <InputMask
            mask="999 999 9999"
            name="phone_number"
            placeholder="XXX XXX XXX"
            className={error ? 'mask_input shake_animation' : 'mask_input'}
            value={phoneNumber}
            onChange={(e: any) => {
              setPhoneNumber(e.target.value);
              setError(false);
            }}
          />
          <TextTypography mt={2} color="red">
            {error ? 'Please enter a valid phone number' : ''}
          </TextTypography>
          <SubmitBtn onClick={onSubmit} label="Continue" />
        </Container>
      </div>
    );
  },
);
