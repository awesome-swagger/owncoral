import { forwardRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  prevStep: () => void;
};

export const Result = forwardRef<DivRef, stepProps>(({ prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const history = useHistory();

  return (
    <FlexContainer ref={ref}>
      <SlideContainer>
        <Box w="100%">
          <BackBtn
            handleClick={() => {
              if (form.formState?.step5 === 'Individual') {
                history.push('/investment-profile/invest');
              } else {
                prevStep();
              }
            }}
          />
        </Box>
        <Box my={6} w="100%">
          <Box mx="auto" bg="gray.300" h={40} w={40} borderRadius="50%" />
          <Heading size="md" mt={8} textAlign="center">
            Congratulations! Your profile is now complete
          </Heading>
          <Text fontSize="md" m="0" textAlign="center">
            You are ready to start investing in Coral.
          </Text>
        </Box>
        <SubmitBtn onClick={() => history.push('/listings')} label="Continue watching properties" />
      </SlideContainer>
    </FlexContainer>
  );
});
