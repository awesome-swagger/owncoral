import { forwardRef, useContext } from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import { FlexContainer } from '../../../components/container';
import { BackBtn } from '../../../components/backBtn';
import { StepFormContext } from '../steps';
import { useHistory } from 'react-router-dom';
import type { DivRef } from '../steps';

type stepProps = {
  prevStep: () => void;
};

export const Result = forwardRef<DivRef, stepProps>(({ prevStep }: stepProps, ref) => {
  const form = useContext(StepFormContext);
  const history = useHistory();
  return (
    <div ref={ref}>
      <FlexContainer>
        <BackBtn
          pos="absolute"
          handleClick={() => {
            if (form.formState?.step5 === 'Individual') {
              history.push('/login/invest');
            } else {
              prevStep();
            }
          }}
        />
        <Box h="10rem" w="10rem" borderRadius="50%" bg="#d2d2d1" />
        <Heading size="md" mt="2rem" letterSpacing="normal" textAlign="center">
          Congratulations! Your profile is now complete{' '}
        </Heading>
        <Text fontSize="1rem" m="0 !important" textAlign="center">
          You are ready to start investing in Coral.
        </Text>
        <Button
          pos="absolute"
          bottom="2.5rem"
          left="1.5rem"
          w="calc(100% - 3rem)"
          h="3rem"
          bg="#4E504F"
          color="#fff"
          cursor="pointer"
        >
          Continue watching properties
        </Button>
      </FlexContainer>
    </div>
  );
});
