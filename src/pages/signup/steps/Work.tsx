import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Heading, Input, Text, FormLabel } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar } from '../../../components';
import type { FormRef } from '../index';
import { StepFormContext } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const Work = forwardRef<FormRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const form = useContext(StepFormContext);
  const formStep = form.formState?.step9;

  const currentRole = watch('currentRole');
  const currentEmployer = watch('currentEmployer');
  const linkedInProfile = watch('linkedInProfile');

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step9: data } });
      nextStep();
    },
    [handleSubmit],
  );

  const handleChange = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step9: data } });
    },
    [handleSubmit],
  );

  useEffect(() => {
    setValue('currentRole', formStep?.currentRole);
    setValue('currentEmployer', formStep?.currentEmployer);
    setValue('linkedInProfile', formStep?.linkedInProfile);
  }, []);

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container layerStyle="noSelect" pb={32}>
        <BackBtn handleClick={prevStep} />
        <ProgressBar total={7} value={6} />
        <Heading as="h4" size="md" mt={8} mb={2} textAlign="left">
          What do you do for work?
        </Heading>

        <FormLabel mt={8}>
          <Text layerStyle="labelColor">CURRENT ROLE OR TITLE</Text>
          <Input
            placeholder="Your current Role or Title"
            name="currentRole"
            ref={register}
            h={12}
            mt={1}
            variant="filled"
            onChange={handleSubmit(handleChange)}
            disabled={linkedInProfile}
          />
        </FormLabel>
        <FormLabel mt={8}>
          <Text layerStyle="labelColor">CURRENT EMPLOYER</Text>
          <Input
            placeholder="Your current employer"
            name="currentEmployer"
            ref={register}
            h={12}
            mt={1}
            variant="filled"
            onChange={handleSubmit(handleChange)}
            disabled={linkedInProfile}
          />
        </FormLabel>
        <Text textAlign="center" layerStyle="labelColor" my={8}>
          Or share
        </Text>
        <FormLabel mt={8}>
          <Text layerStyle="labelColor">YOUR LINKEDIN PROFILE</Text>
          <Input
            placeholder="linkedIn.com/in/yourprofilename"
            name="linkedInProfile"
            ref={register}
            h={12}
            mt={1}
            variant="filled"
            onChange={handleSubmit(handleChange)}
            disabled={currentRole || currentEmployer}
          />
        </FormLabel>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          type="submit"
          disabled={(!currentRole || !currentEmployer) && !linkedInProfile}
        >
          Continue
        </Button>
      </Container>
    </form>
  );
});
