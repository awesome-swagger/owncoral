import React, { forwardRef, useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormLabel, Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar } from '../../../components';
import type { FormRef, StepPropsT } from '../index';
import { StepFormContext } from '../index';

export const Work = forwardRef<FormRef, StepPropsT>(({ nextStep, prevStep }: StepPropsT, ref) => {
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
    [form, nextStep],
  );

  const handleChange = useCallback(
    (data) => {
      form.dispatch({ type: 'update-form', payload: { step9: data } });
    },
    [form],
  );

  useEffect(() => {
    setValue('currentRole', formStep?.currentRole);
    setValue('currentEmployer', formStep?.currentEmployer);
    setValue('linkedInProfile', formStep?.linkedInProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
