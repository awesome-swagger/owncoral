import { forwardRef, useContext } from 'react';
import { Button, Box } from '@chakra-ui/react';
import {
  BackBtn,
  Container,
  HeadingTypography,
  TextTypography,
  InputField,
} from '../../../components';
import type { DivRef } from './index';
import { StepFormContext } from './index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const CertificateOfRegistration = forwardRef<DivRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
    const form = useContext(StepFormContext);

    return (
      <div ref={ref}>
        <Container>
          <BackBtn handleClick={prevStep} />
          <HeadingTypography size="md" mt={8} mb={2} textAlign="left">
            Certificate of registration
          </HeadingTypography>
          <TextTypography fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </TextTypography>
          <label>
            <InputField d="none" type="file" />
            <Box border="2px dashed #D2D2D1" p="14px" cursor="pointer">
              <TextTypography fontSize="md" textAlign="center" color="#4E504F">
                Upload Certificate of registration file
              </TextTypography>
              <TextTypography fontSize="sm" textAlign="center" color="#888">
                JPG, PNG or PDF
              </TextTypography>
            </Box>
          </label>

          <Button
            pos="absolute"
            bottom="2.5"
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            bg="#4E504F"
            color="#fff"
            onClick={nextStep}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  },
);
