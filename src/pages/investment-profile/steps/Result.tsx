import { forwardRef, useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { BackBtn, FlexContainer, HeadingTypography, TextTypography } from '../../../components';
import { StepFormContext } from './index';
import type { DivRef } from './index';

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
              history.push('/investment-profile/invest');
            } else {
              prevStep();
            }
          }}
        />
        <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
        <HeadingTypography size="md" mt={8} textAlign="center">
          Congratulations! Your profile is now complete{' '}
        </HeadingTypography>
        <TextTypography fontSize="md" m="0" textAlign="center">
          You are ready to start investing in Coral.
        </TextTypography>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
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
