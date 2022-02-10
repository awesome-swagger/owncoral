import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import type { InvestmentTypeT } from '../../../shared-fullstack/types';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';

import { BackBtn, Container, ProgressBar, SlideContainer, SubmitBtn } from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

const investmentTypes: { invType: InvestmentTypeT; label: string }[] = [
  { invType: 'STOCKS', label: 'Publicly traded stocks' },
  { invType: 'BONDS', label: 'Bonds' },
  { invType: 'REAL_ESTATE', label: 'Real estate (as an investment)' },
  { invType: 'STARTUPS', label: 'Private companies and startups' },
  { invType: 'HEDGE_FUNDS', label: 'Hedge funds' },
  { invType: 'PRIVATE_EQUITY', label: 'Private equity funds' },
  { invType: 'OTHER', label: 'Other alternative assets' },
];

export const InvestmentTypes:React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);

  const handleClick = (invType: InvestmentTypeT) => {
    let invTypes: InvestmentTypeT[] = signupInfo?.investmentTypes || [];
    if (invTypes.includes(invType)) {
      invTypes = invTypes.filter((invT) => invT !== invType);
    } else {
      invTypes.push(invType);
    }
    invTypes.sort();

    dispatch?.({
      investmentTypes: invTypes,
    });
  };

  const handleSubmit = async () => {
    nextStep(); // optimistically updates, ignoring failures
    await fetchWrap('/api/update-signup-info', {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    });
  };

  return (
    <Container
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      layerStyle="noSelect"
    >
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={prevStep} />
          <ProgressBar total={7} value={3} />
          <Title2 mb={6} textAlign="left">
            Have you invested in these types of investments?
          </Title2>
          <Text textStyle="Body1">Select all that apply</Text>
          <Box my={8}>
            {investmentTypes.map(({ invType, label }) => (
              <Flex
                alignItems="center"
                px={6}
                py={3}
                mt={2}
                layerStyle={
                  (signupInfo?.investmentTypes || []).includes(invType)
                    ? 'selectionBox.selected'
                    : 'selectionBox'
                }
                borderRadius="full"
                textAlign="left"
                cursor="pointer"
                key={invType}
                textStyle="Body1"
                onClick={() => handleClick(invType)}
              >
                <Icon
                  as={
                    (signupInfo?.investmentTypes || []).includes(invType) ? FaCheckCircle : FiCircle
                  }
                  layerStyle="iconColor"
                  bg="transparent !important"
                  h={5}
                  w={5}
                  mr={2}
                />
                {label}
              </Flex>
            ))}
          </Box>
        </Box>
      </SlideContainer>
      <SubmitBtn
        label="Continue"
        disabled={!(signupInfo?.investmentTypes || []).length}
        onClick={handleSubmit}
      />
    </Container>
  );
}
