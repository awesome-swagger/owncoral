import { forwardRef, useContext } from 'react';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

import { BackBtn, Container } from '../../../components';
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
          <Heading size="md" mt={8} mb={2} textAlign="left">
            Certificate of registration
          </Heading>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          <label>
            <Input d="none" type="file" />
            <Box border="2px dashed" layerStyle="borderColor" p="14px" cursor="pointer">
              <Text fontSize="md" textAlign="center" colorScheme="gray" variant="colored">
                Upload Certificate of registration file
              </Text>
              <Text fontSize="sm" textAlign="center" colorScheme="gray" variant="colored">
                JPG, PNG or PDF
              </Text>
            </Box>
          </label>

          <Button
            pos="absolute"
            bottom={10}
            left={6}
            w="calc(100% - 3rem)"
            h={12}
            onClick={nextStep}
          >
            Continue
          </Button>
        </Container>
      </div>
    );
  },
);
