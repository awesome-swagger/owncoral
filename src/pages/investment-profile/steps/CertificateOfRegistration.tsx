import type React from 'react';
import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';

export const CertificateOfRegistration:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const borderColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Container>
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <Title1 mt={8} mb={2} textAlign="left">
            Certificate of registration
          </Title1>
          <Text fontSize="md" textAlign="left" mb={8}>
            Lorem ipsum dolor sir amet
          </Text>
          <label>
            <Input d="none" type="file" />
            <Box border="2px dashed" borderColor={borderColor} p="14px" cursor="pointer">
              <Text fontSize="md" textAlign="center" colorScheme="gray" variant="colored">
                Upload Certificate of registration file
              </Text>
              <Text fontSize="sm" textAlign="center" colorScheme="gray" variant="colored">
                JPG, PNG or PDF
              </Text>
            </Box>
          </label>
        </Box>
        <SubmitBtn onClick={() => nextStep()} label="Continue" />
      </SlideContainer>
    </Container>
  );
}
