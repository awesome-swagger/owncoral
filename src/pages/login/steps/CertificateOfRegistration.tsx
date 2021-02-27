import { forwardRef, useContext } from 'react';
import { Heading, Button, Box, Text, Input } from '@chakra-ui/react';
import { BackBtn, Container } from '../../../components';
import type { DivRef } from '../steps';
import { StepFormContext } from '../steps';

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
          <Heading size="md" mt="2rem" mb="0.5rem" textAlign="left" letterSpacing="normal">
            Certificate of registration
          </Heading>
          <Text fontSize="1rem" textAlign="left" mb="2rem">
            Lorem ipsum dolor sir amet
          </Text>
          <label>
            <Input d="none" type="file" />
            <Box border="2px dashed #D2D2D1" p="14px" cursor="pointer">
              <Text fontSize="1rem" textAlign="center" color="#4E504F">
                Upload Certificate of registration file
              </Text>
              <Text fontSize="0.85rem" textAlign="center" color="#888">
                JPG, PNG or PDF
              </Text>
            </Box>
          </label>

          <Button
            pos="absolute"
            bottom="2.5rem"
            left="1.5rem"
            w="calc(100% - 3rem)"
            h="3rem"
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
