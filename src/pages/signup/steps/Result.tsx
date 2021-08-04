import { FiCheck } from 'react-icons/fi';
import { Button, Center, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, FlexContainer } from '../../../components';
import type { StepPropsT } from '../index';

export const Result = ({ nextStep, prevStep }: StepPropsT) => {
  const resultHeading = useColorModeValue('primary.700', 'primary.300');

  return (
    <FlexContainer layerStyle="noSelect">
      <BackBtn handleClick={prevStep} top={6} left={6} pos="absolute" />
      <Center h={16} w={16} borderRadius="50%" layerStyle="card">
        <Icon as={FiCheck} color="green.500" h={6} w={6} />
      </Center>
      <Heading as="h4" size="md" mt={4} color={resultHeading} textAlign="center">
        Great, you&#39;ve answered everything!
      </Heading>
      <Text fontSize="sm" colorScheme="gray" variant="colored" textAlign="center">
        If you need to edit any responses, tap the back button. Otherwise, click the button below to
        continue.
      </Text>
      <Button pos="absolute" bottom={10} left={6} onClick={nextStep} w="calc(100% - 3rem)" h={12}>
        Submit
      </Button>
    </FlexContainer>
  );
};
