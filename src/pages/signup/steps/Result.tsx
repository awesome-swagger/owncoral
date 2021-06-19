import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, FlexContainer } from '../../../components';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
export const Result = ({ nextStep, prevStep }: stepProps) => {
  const resultHeading = useColorModeValue('primary.700', 'primary.300');

  return (
    <FlexContainer layerStyle="noSelect">
      <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />

      <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
      <Heading as="h4" size="md" mt={8} color={resultHeading}>
        Thanks for joining Coral
      </Heading>
      <Text fontSize="sm" colorScheme="gray" variant="colored" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        onClick={nextStep}
        w="calc(100% - 3rem)"
        h={12}
        colorScheme="primary"
      >
        Start
      </Button>
    </FlexContainer>
  );
};
