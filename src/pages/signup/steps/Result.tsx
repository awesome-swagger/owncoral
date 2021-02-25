import { forwardRef } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { BackBtn } from '../../../components/backBtn';
import { FlexContainer } from '../../../components/container';
import type { DivRef } from '../index';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
export const Result = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  return (
    <Box ref={ref} layerStyle="noSelect">
      <FlexContainer>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Box h="10rem" w="10rem" borderRadius="50%" bg="#d2d2d1" />
        <Heading as="h4" size="md" mt="2rem" color="primary.highlight">
          Thanks for joining Coral
        </Heading>
        <Text fontSize="0.85rem" color="gray.500" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Button
          pos="absolute"
          bottom="2.5rem"
          left="1.5rem"
          onClick={nextStep}
          w="calc(100% - 3rem)"
          h="3rem"
          colorScheme="primary"
        >
          Start
        </Button>
      </FlexContainer>
    </Box>
  );
});
