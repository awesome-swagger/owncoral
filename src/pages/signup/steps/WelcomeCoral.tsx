import { Fragment } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import { BackBtn, FlexContainer } from '../../../components';

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

export const WelcomeCoral = ({ nextStep, prevStep }: stepProps) => {
  return (
    <Fragment>
      <FlexContainer layerStyle="noSelect">
        <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />
        <Box h={40} w={40} borderRadius="50%" bg="#d2d2d1" />
        <Heading size="md" as="h4" mt={8} textAlign="center">
          Welcome to Coral, John Doe!
        </Heading>
        <Text fontSize="md" textAlign="center">
          On the following screens, we are going to ask you a few questions to get you better. There
          are no good/bad answers.
        </Text>
        <Button
          pos="absolute"
          bottom={10}
          left={6}
          w="calc(100% - 3rem)"
          h={12}
          cursor="pointer"
          colorScheme="primary"
          onClick={nextStep}
        >
          Continue
        </Button>
      </FlexContainer>
    </Fragment>
  );
};
