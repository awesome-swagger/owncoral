import { forwardRef, useContext } from 'react';
import { StepFormContext } from '../steps';
import { BackBtn } from '../../../components/backBtn';
import { Container } from '../../../components/container';
import { Heading, Button, Box, Text, Input } from '@chakra-ui/react';
import type { DivRef } from '../steps';

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
          <Heading size="md" mt="32px" mb="8px" textAlign="left" letterSpacing="normal">
            Certificate of registration
          </Heading>
          <Text fontSize="1rem" textAlign="left" mb="32px">
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
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
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
