import type React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

import { BackBtn, FlexContainer } from '../../../../components';
import { Title2 } from '../../../../components/text';

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
        <Title2>Processing your transaction...</Title2>
      </Box>
    </FlexContainer>
  );
};
