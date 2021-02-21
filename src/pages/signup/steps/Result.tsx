import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { BackBtn } from '../../../components/backBtn';
import { FlexContainer } from '../../../components/container';
import type { DivRef } from '../../signup';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
export const Result = forwardRef<DivRef, stepProps>(({ nextStep, prevStep }: stepProps, ref) => {
  return (
    <Box ref={ref} layerStyle="noSelect">
      <FlexContainer>
        <BackBtn pos="absolute" handleClick={prevStep} />

        <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
        <Heading as="h4" size="md" mt="32px" color="primary.highlight">
          Thanks for joining Coral
        </Heading>
        <Text fontSize="0.85rem" color="gray.500" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <Link to="/">
          <Button
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            colorScheme="primary"
          >
            Start
          </Button>
        </Link>
      </FlexContainer>
    </Box>
  );
});
