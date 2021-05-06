import type React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { FlexContainer, BackBtn } from '../../../../components';
import { H6 } from '../../../../components/text';

export const ProcessingTransaction = ({
  handleTransaction,
}: {
  handleTransaction: React.Dispatch<React.SetStateAction<string>>;
}) => {
  // TODO: once the processing is succeeded, handleTransaction('successTransaction') will be called,
  // when it is failed, handleTransaction('failedTransaction') will be called
  
  // if processing succeeded handleTransaction('successTransaction') else handleTransaction('failedTransaction')

  return (
    <FlexContainer>
      <BackBtn
        top={6}
        left={6}
        pos="absolute"
        handleClick={() => handleTransaction('confirmTransaction')}
      />
      <Box textAlign="center">
        <Spinner />
        <H6>Processing your transaction...</H6>
      </Box>
    </FlexContainer>
  );
};
