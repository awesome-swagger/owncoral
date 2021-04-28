import { Box, Spinner, Text } from '@chakra-ui/react';
import { FlexContainer, BackBtn } from '../../../components';

export const ProcessingTransaction = ({
  handleTransaction,
}: {
  handleTransaction: React.Dispatch<React.SetStateAction<string>>;
}) => {
  setTimeout(() => handleTransaction('sucessTransaction'), 3000);
  return (
    <FlexContainer>
      <BackBtn
        top={6}
        left={6}
        pos="absolute"
        handleClick={() => handleTransaction('confirmTrasaction')}
      />
      <Box textAlign="center">
        <Spinner />
        <Text fontSize="lg">Processing your transaction...</Text>
      </Box>
    </FlexContainer>
  );
};
