import React, { Dispatch, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertTriangle, FiCircle, FiMail } from 'react-icons/fi';
import { Redirect, useHistory } from 'react-router-dom';
import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  BackBtn,
  Container,
  DividerWithText,
  FlexContainer,
  SlideContainer,
  SubmitBtn,
} from '../../../components';
import { Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST, DEFAULT_SUCCESS_TOAST } from '../../../lib/errorToastOptions';
import { fbqWrap } from '../../../lib/fbqWrap';
import type { StepPropsT } from '../index';
import { SignupContext } from '../signupContext';

type AccreditationKeysT = 'isAccreditedByIncome' | 'isAccreditedByLicense' | 'isAccreditedByAssets';
type AccreditedInvestorT = {
  key: AccreditationKeysT;
  label: string;
  desc?: string;
};

const accreditedInvestor: AccreditedInvestorT[] = [
  {
    key: 'isAccreditedByIncome',
    label: 'Yes, I have $200k in income, or $300k jointly with my spouse',
    desc: 'For the past two years, and expect the same this year',
  },
  {
    key: 'isAccreditedByAssets',
    label: 'Yes, I have over $1 million in net assets, excluding my primary residence',
  },
  { key: 'isAccreditedByLicense', label: 'Yes, I hold a Series 7, Series 65 or Series 82 license' },
];

export const Investor: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { signupInfo, dispatch } = useContext(SignupContext);
  const [available, setAvailable] = useState('Available');

  // Extra bit of UI state, so that initially there's no selection (neither yes nor no)
  const [notAccreditedCheck, setNotAccreditedCheck] = useState(false);

  // Accreditation state, or null if they haven't answered any question yet
  let isAccredited: boolean | null = null;

  if (
    signupInfo?.isAccreditedByIncome ||
    signupInfo?.isAccreditedByLicense ||
    signupInfo?.isAccreditedByAssets
  ) {
    isAccredited = true;
    if (notAccreditedCheck) setNotAccreditedCheck(false);
  } else if (notAccreditedCheck) {
    isAccredited = false;
  }

  const handleSelection = (key: AccreditationKeysT) => {
    dispatch?.({
      [key]: !(signupInfo?.[key] || false),
    });
  };

  const handleClickContinue = () => {
    if (isAccredited) {
      fbqWrap('trackCustom', 'IsAccredited');
      nextStep();
    } else {
      setAvailable('Not Available');
    }
    // TODO(jimmy):
    //   Remove workaround when we have new campaign. See:
    //   https://linear.app/franklin-coral/issue/FC-619/[workaround]-double-book-fb-pixel-events-to-work-with-existing
    fbqWrap('trackCustom', 'TypeformFirstInteraction');
  };

  const clearAccreditation = () => {
    setNotAccreditedCheck(true);
    dispatch?.({
      isAccreditedByIncome: false,
      isAccreditedByLicense: false,
      isAccreditedByAssets: false,
    });
  };

  // Previous steps incomplete, go back to beginning
  if (
    signupInfo === undefined ||
    signupInfo.legalFirst === null ||
    signupInfo.legalLast === null ||
    signupInfo.residencyCountryCode === "" ||
    (signupInfo.residencyCountryCode !== 'US' && signupInfo.taxPayerId === null)
  ) {
    return <Redirect push to="/signup" />;
  }

  return (
    <div>
      {available === 'Available' ? (
        <Box layerStyle="noSelect">
          <Container d="flex" flexDir="column" justifyContent="space-between" isFooter={false}>
            <SlideContainer>
              <Box w="100%">
                <BackBtn handleClick={prevStep} />
                <Title2 mt={8} mb={6} textAlign="left">
                  Are you an accredited investor?
                </Title2>
                <Text textStyle="Body1">
                  You are an accredited investor if any of the first three statements below are
                  true. Select all that apply.
                </Text>
                <Box my={8}>
                  <Divider />
                  {accreditedInvestor.map(({ key, label, desc }, ind) => (
                    <Flex
                      px={2}
                      py={3}
                      mt={2}
                      textAlign="left"
                      cursor="pointer"
                      textStyle="Body1"
                      fontWeight="600"
                      onClick={() => handleSelection(key)}
                      key={key}
                    >
                      <Icon
                        as={signupInfo?.[key] ? FaCheckCircle : FiCircle}
                        layerStyle="iconColor"
                        bg="transparent !important"
                        h={5}
                        w={5}
                        mr={2}
                      />
                      <Box>
                        {label}
                        {desc && (
                          <Text textStyle="Subhead" mt={2}>
                            {desc}
                          </Text>
                        )}
                      </Box>
                    </Flex>
                  ))}
                  <DividerWithText my={2}>or</DividerWithText>
                  <Flex
                    px={2}
                    py={3}
                    mt={2}
                    textAlign="left"
                    cursor="pointer"
                    textStyle="Body1"
                    fontWeight="600"
                    onClick={clearAccreditation}
                    key="notAccredited"
                  >
                    <Icon
                      as={notAccreditedCheck ? FaCheckCircle : FiCircle}
                      layerStyle="iconColor"
                      bg="transparent !important"
                      h={5}
                      w={5}
                      mr={2}
                    />
                    <Box>No, I’m not accredited</Box>
                  </Flex>
                </Box>
              </Box>
              <SubmitBtn
                onClick={handleClickContinue}
                variant={isAccredited ? undefined : 'outline'}
                label="Continue"
                disabled={isAccredited === null}
              />
            </SlideContainer>
          </Container>
        </Box>
      ) : (
        <NotAvailable goBack={() => setAvailable('Available')} />
      )}
    </div>
  );
};

const WaitlistForm = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
});
type WaitlistFormT = z.infer<typeof WaitlistForm>;

const NotAvailable = ({ goBack }: { goBack: Dispatch<any> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WaitlistForm),
  });
  const toast = useToast();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
    
  const onSubmit = () => {
    
  };

  return (
    <form css={{ width: '100%' }} onSubmit={onSubmit}>
      <FormControl>
        <FlexContainer layerStyle="noSelect">
          <SlideContainer>
            <Box w="100%">
              <BackBtn handleClick={goBack} />
            </Box>
            <Box my={6}>
              <Center mx="auto" h={16} w={16} borderRadius="50%" layerStyle="card">
                <Icon as={FiAlertTriangle} color="green.500" h={6} w={6} />
              </Center>
              <Title2 mt={8} mb={6} textAlign="left">
                Coral is currently available to accredited investors only
              </Title2>
              <Text my={4} fontSize="md" textAlign="center">
                But we’re working on that! Please join our waitlist.
              </Text>
              <InputGroup align="center" mt={2}>
                <InputLeftElement pointerEvents="none" h="100%">
                  <Icon as={FiMail} />
                </InputLeftElement>
                <Input h={12} placeholder="Email" variant="filled" {...register('email')} />
              </InputGroup>
              <FormHelperText w="100%" textStyle="Caption1">
                {errors.email?.message}&nbsp;
              </FormHelperText>
              <SubmitBtn
                isLoading={isLoading}
                spinner={<Spinner />}
                disabled={errors.email}
                label="Join the waitlist"
              />
            </Box>
          </SlideContainer>
        </FlexContainer>
      </FormControl>
    </form>
  );
};
