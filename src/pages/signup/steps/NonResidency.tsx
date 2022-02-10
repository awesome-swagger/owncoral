import React, { useCallback, useContext, useState } from 'react';
import InputMask from 'react-input-mask';
import { FiAlertTriangle } from 'react-icons/fi';
import { Redirect, useHistory } from 'react-router-dom';
import { Box, Center, Button, Icon, Input, Text, useColorModeValue } from '@chakra-ui/react';
import { BackBtn, Container, FlexContainer } from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

export const NonResidency: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const [available, setAvailable] = useState<boolean | null>(null);
  const { signupInfo } = useContext(SignupContext);

  // Previous steps incomplete, go back to beginning
  if (
    signupInfo === undefined ||
    signupInfo.legalFirst === null ||
    signupInfo.legalLast === null ||
    signupInfo.residencyCountryCode === 'US'
  ) {
    return <Redirect push to="/signup" />;
  }

  return (
    <Box layerStyle="noSelect">
      {available === null ? (
        <Container>
          <BackBtn handleClick={prevStep} />
          <Title2 mt={8} mb={6} textAlign="left">
            Do you have a U.S tax ID?
          </Title2>
          <Text fontSize="md" textAlign="left">
            This tax ID would be called an IRS individual taxpayer identification number (ITIN)
          </Text>
          <Box
            px={6}
            py={3}
            mt={6}
            borderRadius="full"
            textAlign="left"
            cursor="pointer"
            layerStyle="selectionBox"
            onClick={() => setAvailable(true)}
          >
            Yes
          </Box>
          <Box
            px={6}
            py={3}
            mt={2}
            borderRadius="full"
            textAlign="left"
            cursor="pointer"
            layerStyle="selectionBox"
            onClick={() => setAvailable(false)}
          >
            No
          </Box>
        </Container>
      ) : available ? (
        <TaxID
          nextStep={nextStep}
          prevStep={prevStep}
          goBack={() => setAvailable(null)}
        />
      ) : (
        <NotAvailable goBack={() => setAvailable(null)} />
      )}
    </Box>
  );
};

const TaxID = ({
  nextStep,
  goBack,
}: StepPropsT & {
  goBack: React.Dispatch<any>;
}) => {
  const { dispatch, signupInfo } = useContext(SignupContext);
  const [taxPayerId, setTaxPayerId] = useState<string>(signupInfo?.taxPayerId || '');

  const handleSubmit = useCallback(() => {
    dispatch?.({ taxPayerId });
    nextStep();
  }, [taxPayerId, dispatch, nextStep]);

  const isValidSsn = (ssnWithPlaceholder: string) => {
    const ssn = ssnWithPlaceholder.replace(/[^0-9]/g, '');
    return ssn.length === 9;
  };

  return (
    <Container d="flex" flexDir="column" justifyContent="space-between" layerStyle="noSelect">
      <Box>
        <BackBtn handleClick={goBack} />
        <Title2 mt={8} mb={6} textAlign="left">
          Please enter your Tax ID
        </Title2>
        <Input
          as={InputMask}
          mask="999-99-9999"
          type="tel"
          maskPlaceholder="0"
          placeholder="XXX-XX-XXXX"
          fontFamily="monospace"
          className="mask_input"
          h={12}
          mt={8}
          value={taxPayerId}
          variant="filled"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxPayerId(e.target.value)}
        />
      </Box>
      <Button h={12} disabled={!isValidSsn(taxPayerId)} onClick={() => handleSubmit()}>
        Continue
      </Button>
    </Container>
  );
};

const NotAvailable = ({ goBack }: { goBack: React.Dispatch<any> }) => {
  const history = useHistory();
  const iconWarningColor = useColorModeValue('yellow.400', 'yellow.200');
  const iconWarningBgColor = useColorModeValue('notificationTint.warning', 'whiteAlpha.100');

  return (
    <FlexContainer layerStyle="noSelect">
      <BackBtn handleClick={goBack} pos="absolute" top={6} left={6} />
      <Center borderRadius="xl" h={16} minW={16} bg={iconWarningBgColor}>
        <Icon
          as={FiAlertTriangle}
          h={8}
          w={8}
          color={iconWarningColor}
        />
      </Center>
      <Title2 mt={8} mb={6} textAlign="center">
        Sorry, Coral is currently only available to U.S. residents, and nonresidents with U.S. tax IDs.
      </Title2>
      <Button
        pos="absolute"
        bottom={10}
        left={6}
        w="calc(100% - 3rem)"
        h={12}
        onClick={() => history.push('/')}
      >
        Go Back
      </Button>
    </FlexContainer>
  );
};
