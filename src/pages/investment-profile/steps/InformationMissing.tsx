import type React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

import { BackBtn, Container, SlideContainer } from '../../../components';
import { Title1 } from '../../../components/text';
import type { StepPropsT } from '../index';

export const InformationMissing:React.FC<StepPropsT> = ({ nextStep, prevStep }) => (
  <Container>
    <SlideContainer>
      <Box w="100%">
        <BackBtn handleClick={prevStep} />
      </Box>
      <Box py={6}>
        <Box h={40} w={40} mx="auto" borderRadius="50%" bg="gray.200" />
        <Title1 mt={8} textAlign="center">
          Some personal information is missing
        </Title1>
        <Text fontSize="md" m="0" textAlign="center">
          Before making an investing, we need you to provide us some personal information.
        </Text>
      </Box>
      <VStack
        bottom={6}
        pos={{ base: 'fixed', md: 'initial' }}
        w={{ base: 'calc(100% - 3rem)', md: '100%' }}
        spacing={2}
      >
        <Button w="100%" cursor="pointer" onClick={() => nextStep()}>
          Complete information
        </Button>
        <Button w="100%" bg="fff" colorScheme="gray" variant="outline" cursor="pointer">
          Skip for now
        </Button>
      </VStack>
    </SlideContainer>
  </Container>
);
