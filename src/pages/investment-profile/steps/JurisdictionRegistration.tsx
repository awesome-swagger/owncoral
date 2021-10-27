import { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Heading, Select, Text, Box } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../../components';
import { States } from '../../../lib/states';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const JurisdictionRegistration = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, register, setValue } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step13: data },
      });
      nextStep();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('jurisdiction_registration', formState?.step13?.jurisdiction_registration || '');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <SlideContainer>
            <Box w="100%">
              <BackBtn handleClick={prevStep} />
              <Heading size="md" mt={8} mb={2} textAlign="left">
                Which is the jurisdiction of registration
              </Heading>
              <Text fontSize="md" textAlign="left">
                Lorem ipsum dolor sir amet
              </Text>
              <Select
                ref={register}
                placeholder="Select option"
                name="jurisdiction_registration"
                mt={2}
              >
                {States.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </Box>
            <SubmitBtn label="Continue" />
          </SlideContainer>
        </Container>
      </form>
    );
  },
);
