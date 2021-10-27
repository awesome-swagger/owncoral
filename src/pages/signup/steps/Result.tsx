import { FiCheck } from 'react-icons/fi';
import { Box, Center, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import type { StepPropsT } from '../index';

export const Result = ({ nextStep, prevStep }: StepPropsT) => {
  const resultHeading = useColorModeValue('primary.700', 'primary.300');

  return (
    <FlexContainer layerStyle="noSelect">
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
        </Box>
        <Box my={6} w="100%">
          <Center mx="auto" h={16} w={16} borderRadius="50%" layerStyle="card">
            <Icon as={FiCheck} color="green.500" h={6} w={6} />
          </Center>
          <Heading as="h4" size="md" mt={4} color={resultHeading} textAlign="center">
            Great, you&#39;ve answered everything!
          </Heading>
          <Text fontSize="sm" colorScheme="gray" variant="colored" textAlign="center">
            If you need to edit any responses, tap the back button. Otherwise, click the button
            below to continue.
          </Text>
        </Box>
        <SubmitBtn label="Submit" onClick={nextStep} />
      </SlideContainer>
    </FlexContainer>
  );
};
