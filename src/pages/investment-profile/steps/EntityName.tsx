import { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Box } from '@chakra-ui/react';

import { BackBtn, Container, SubmitBtn, SlideContainer } from '../../../components';
import { Title1 } from '../../../components/text';
import type { FormRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const EntityName = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const { handleSubmit, setValue, register } = useForm();
    const form = useContext(StepFormContext);

    const onSubmit = useCallback((data) => {
      form.dispatch({
        type: 'update-form',
        payload: { step6: data },
      });
      nextStep();
    }, []);

    useEffect(() => {
      const formState = form.formState;

      setValue('entity_name', formState?.step6?.entity_name || '');
    }, []);

    return (
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <SlideContainer>
            <Box w="100%">
              <BackBtn handleClick={prevStep} />
              <Title1 mt={8} mb={2} textAlign="left">
                What is your Entity Name
              </Title1>
              <Input
                type="text"
                name="entity_name"
                placeholder="Entity Name"
                ref={register({ required: true })}
                h={12}
                mt={8}
              />
            </Box>
            <SubmitBtn label="Continue" />
          </SlideContainer>
        </Container>
      </form>
    );
  },
);
