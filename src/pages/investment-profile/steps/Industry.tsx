import { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Heading, Input, Text, Box } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../../components';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Industry = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(StepFormContext);

  const onSubmit = useCallback((data) => {
    form.dispatch({
      type: 'update-form',
      payload: { step10: data },
    });
    nextStep();
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('industry', formState?.step10?.industry || '');
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Heading size="md" mt={8} mb={2} textAlign="left">
              What’s your Industry?
            </Heading>
            <Text fontSize="md" textAlign="left">
              Lorem ipsum dolor sir amet
            </Text>
            <Input
              name="industry"
              ref={register({ required: true })}
              type="text"
              placeholder="Industry"
              h={12}
              mt={8}
            />
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
});
