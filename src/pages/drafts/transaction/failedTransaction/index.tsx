import { FlexContainer, BackBtn } from '../../../../components';
import { Heading, Text, Button } from '@chakra-ui/react';

export const FailedTransaction = () => {
  return (
    <FlexContainer>
      <BackBtn top={6} left={6} pos="absolute" handleClick={() => console.log('Clicked')} />
      <Heading size="md" textAlign="center">
        Sorry, we couldn’t process your transaction
      </Heading>
      <Text fontSize="md" textAlign="center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Text>
      <Button pos="absolute" bottom={10} left={4} w="calc(100% - 2rem)">
        Try again
      </Button>
    </FlexContainer>
  );
};
