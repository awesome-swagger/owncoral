import React, { Dispatch, useContext, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiAlertTriangle, FiCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';

import {
  BackBtn,
  Container,
  FlexContainer,
  SlideContainer,
  SubmitBtn,
} from '../../../components';
import { Title2 } from '../../../components/text';
import type { StepPropsT } from '../index';
import { InvestmentProfileContext } from '../index';

type AccreditedEntityT = {
  key: string;
  label: string;
  desc?: string;
};

const accreditedEntities: AccreditedEntityT[] = [
  {
    key: '0',
    label: 'Yes, it is an entity in which all of the equity owners are Accredited Investors',
  },
  {
    key: '1',
    label: 'Yes, it is a trust with total assets in excess of $5,000,000',
    desc:
      `That was not formed for the specific purpose of acquiring the Interest, and whose purchase is
      directed by a person with such knowledge and experience in financial and business matters that
      he or she is capable of evaluating the merits and risks of the prospective investment.`,
  },
  {
    key: '2',
    label:
      `Yes, it is an organization described in section 501(c)(3) of
      the Internal Revenue Code, corporation, Massachusetts orsimilar
      business trust, partnership, or limited liability company with
      total assets in excess of $5,000,000`,
    desc: 'That was not formed for the specific purpose of acquiring the Interest',
  },
  {
    key: '3',
    label:
      'Yes, it is an entity of a type not described above, with total assets in excess of $5,000,000',
    desc: 'That was not formed for the specific purpose of acquiring the Interest',
  },
  {
    key: 'none',
    label: 'No, none of the above are true',
  }
];

export const AccreditedEntity: React.FC<StepPropsT> = ({ nextStep, prevStep }) => {
  const { formState, dispatch } = useContext(InvestmentProfileContext);
  const [notAvailable, setNotAvailable] = useState<boolean>(false);

  const handleSelection = (key: string) => {
    dispatch?.({
      step8: key
    });
  };

  const handleClickContinue = () => {
    if (formState?.step8 === 'none') setNotAvailable(true);
    else nextStep();
  };

  if (notAvailable)
    return <NotAvailable goBack={prevStep} />

  return (
    <Box layerStyle="noSelect">
      <Container d="flex" flexDir="column" justifyContent="space-between">
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
              {accreditedEntities.map(({ key, label, desc }) => (
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
                    as={formState?.step8 === key ? FaCheckCircle : FiCircle}
                    layerStyle="iconColor"
                    bg="transparent !important"
                    color="red"
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
            </Box>
          </Box>
          <SubmitBtn
            onClick={handleClickContinue}
            label="Continue"
            disabled={!formState?.step8}
          />
        </SlideContainer>
      </Container>
    </Box>
  );
};

const NotAvailable = ({ goBack }: {goBack: Dispatch<any>}) => {
  const history = useHistory();

  return (
    <FlexContainer layerStyle="noSelect">
      <SlideContainer>
        <Box w="100%">
          <BackBtn handleClick={goBack} />
        </Box>
        <Box my={6}>
          <Center mx="auto" h={16} w={16} borderRadius="50%" layerStyle="card">
            <Icon as={FiAlertTriangle} color="green.500" h={6} w={6} />
          </Center>
          <Title2 mt={8} mb={6} textAlign="center">
            Coral is currently available to accredited entities only
          </Title2>
          <Text my={4} fontSize="md" textAlign="center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </Text>
        </Box>
        <SubmitBtn label="Dismiss" onClick={() => history.push('/')} />
      </SlideContainer>
    </FlexContainer>
  );
};
