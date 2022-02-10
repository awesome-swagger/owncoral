import React, { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const EntityName:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { handleSubmit, setValue, register } = useForm();
  const form = useContext(InvestmentProfileContext);

  const onSubmit = useCallback((data) => {
    form.dispatch?.({ step6: data });
    nextStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formState = form.formState;

    setValue('entity_name', formState?.step6?.entity_name || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SlideContainer>
          <Box w="100%">
            <BackBtn handleClick={prevStep} />
            <Title2 mt={8} mb={2} textAlign="left">
              What is your Legal Entity Name
            </Title2>
            <Text textStyle="Body1">
              Lorem ipsum dolor sir amet. If you don’t know it
              exactly don’t worry, you can edit it later.
            </Text>

            <Text textStyle="Body2" mt={8} mb={2}>
              ENTITY NAME
            </Text>
            <Input
              type="text"
              {...register('entity_name', { required: true })}
              placeholder="Your entity name"
              h={12}
            />
          </Box>
          <SubmitBtn label="Continue" />
        </SlideContainer>
      </Container>
    </form>
  );
}
