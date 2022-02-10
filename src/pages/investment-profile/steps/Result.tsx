import React, { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Box, Center, Icon, Text } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

import { BackBtn, FlexContainer, SlideContainer, SubmitBtn } from '../../../components';
import { Title1 } from '../../../components/text';
import { InvestmentProfileUrl } from '../../../lib/uriConstants';
import theme from '../../../theme';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

export const Result:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const form = useContext(InvestmentProfileContext);
  const history = useHistory();

  return (
    <FlexContainer>
      <SlideContainer>
        <Box w="100%">
          <BackBtn
            handleClick={() => {
              if (form.formState?.step5 === 'Individual') {
                history.push(InvestmentProfileUrl);
              } else {
                prevStep();
              }
            }}
          />
        </Box>
        <Box my={6} w="100%">
          <Center mx="auto" h={16} w={16} borderRadius="3xl" bgColor={transparentize('green.200', 0.2)(theme)}>
            <Icon as={FiCheck} color="green.500" h={6} w={6} />
          </Center>
          <Title1 mt={8} textAlign="center">
            Congratulations! Your profile is now complete
          </Title1>
          <Text fontSize="md" m="0" textAlign="center">
            You are ready to start investing in Coral.
          </Text>
        </Box>
        <SubmitBtn onClick={() => nextStep()} label="Continue watching properties" />
      </SlideContainer>
    </FlexContainer>
  );
}
