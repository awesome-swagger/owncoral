import { forwardRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button , Heading, Text } from '@chakra-ui/react';

import { BackBtn, FlexContainer } from '../../../components';
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
      <BackBtn
        pos="fixed"
        top={6}
        left={6}
        handleClick={() => {
          if (form.formState?.step5 === 'Individual') {
            history.push('/investment-profile/invest');
          } else {
            prevStep();
          }
        }}
      />
      <Box h={40} w={40} borderRadius="50%" />
      <Heading size="md" mt={8} textAlign="center">
        Congratulations! Your profile is now complete{' '}
      </Heading>
      <Text fontSize="md" m="0" textAlign="center">
        You are ready to start investing in Coral.
      </Text>
      <Button pos="absolute" bottom={10} left={6} w="calc(100% - 3rem)" h={12} cursor="pointer">
        Continue watching properties
      </Button>
    </FlexContainer>
  );
});
