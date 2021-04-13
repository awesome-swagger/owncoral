import React, { Fragment, useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import type { UserProfileT } from '../../../../shared-fullstack/types';
import {
  Box,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Switch,
  Text,
  useEditableControls,
  useToast,
  VStack,
} from '@chakra-ui/react';
import * as R from 'remeda';

import { BackBtn, DayPicker } from '../../../../components';
import type { SplitDateT } from '../../../../components/daypicker';
import { fetchCurrentUser, updateCurrentUser } from './lib';

export const PersonalInformation = ({ goBack }: { goBack: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // We're using mostly uncontrolled components (Editables keep their own state),
  // so just load the user initially
  const [initialUser, setInitialUser] = useState<UserProfileT | null>(null);
  const [birthDate, setBirthDate] = useState<SplitDateT | null>(null);
  const [isAccredited, setIsAccredited] = useState<boolean>(false);

  const toast = useToast();

  const handleDateChange = (newDatePart: Partial<SplitDateT>) => {
    /* eslint-disable @typescript-eslint/consistent-type-assertions */
    const newBirthDate: SplitDateT = {
      ...(birthDate || {}),
      ...newDatePart,
    } as SplitDateT;
    /* eslint-enable @typescript-eslint/consistent-type-assertions */
    setBirthDate(newBirthDate);

    const bdAsDate = new Date(
      Number(newBirthDate.year),
      Number(newBirthDate.month),
      Number(newBirthDate.day),
    );
    updateCurrentUser({ birthDate: bdAsDate.toISOString() }, toast);
  };

  const makeSubmit = (key: keyof UserProfileT) => (newValue: string) =>
    updateCurrentUser({ [key]: newValue }, toast);

  useEffect(() => {
    fetchCurrentUser({ setIsLoading, setBirthDate, setInitialUser, setIsAccredited, toast });
  }, []);

  return (
    <Box>
      <BackBtn handleClick={goBack} pos="absolute" />
      <Heading mb={6} mt="0" mx="0" fontSize="lg" align="center">
        Personal Information
      </Heading>

      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <VStack spacing={0.25} alignItems="flex-start">
          <EditableLine
            label="First Name"
            initialValue={initialUser?.legalFirst || ''}
            handleSubmit={makeSubmit('legalFirst')}
          />
          <EditableLine
            label="Last Name"
            initialValue={initialUser?.legalLast || ''}
            handleSubmit={makeSubmit('legalLast')}
          />
          <Box p={3} width="100%">
            <Heading size="xs" as="h6" m={0}>
              Birthdate
            </Heading>
            <DayPicker date={birthDate as SplitDateT} onChange={handleDateChange} />
          </Box>

          <EditableLine
            label="Phone"
            initialValue={initialUser?.phone || ''}
            handleSubmit={makeSubmit('phone')}
          />

          <ReadonlyLine label="Email" value={initialUser?.email} />
          <ReadonlyLine label="Alternate Email" value={initialUser?.emailAlt} />
          <Box p={3} width="100%">
            <Heading size="xs" as="h6" m={0}>
              Address
            </Heading>
            <Text marginY={2}>
              {R.flatMap(
                [
                  initialUser?.addressResidency.line1,
                  initialUser?.addressResidency.line2,
                  initialUser?.addressResidency.line3,
                  `${initialUser?.addressResidency.cityLocality}, ${initialUser?.addressResidency.stateRegion} ` +
                    initialUser?.addressResidency.postalCode,
                ].filter((text) => (text || '').length > 0),
                // eslint-disable-next-line react/jsx-key
                (text) => [text, <br />],
              )}
            </Text>
          </Box>

          <Box p={3} width="100%">
            <Heading size="xs" as="h6" m={0}>
              I&#39;m an accredited visitor
            </Heading>
            <Switch
              marginY={2}
              size="lg"
              isChecked={isAccredited}
              onChange={() => {
                const newIsAccredited = !isAccredited;
                setIsAccredited(newIsAccredited);
                updateCurrentUser({ completedAccreditation: newIsAccredited }, toast);
              }}
            />
          </Box>
        </VStack>
      )}
    </Box>
  );
};

type EditableLinePropsT = {
  label: string;
  initialValue: string;
  handleSubmit: (newValue: string) => void;
};
const EditableLine = ({ label, initialValue, handleSubmit }: EditableLinePropsT) => {
  const EditIcon = () => {
    const { isEditing, getEditButtonProps } = useEditableControls();
    return !isEditing ? (
      <Fragment>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <IconButton
          icon={<Icon as={FiEdit2} />}
          variant="unstyled"
          aria-label={'Edit ' + label}
          _focus={{ boxShadow: 0, outline: 0 }}
          {...getEditButtonProps()}
        />
      </Fragment>
    ) : null;
  };

  return (
    <Box p={2} width="100%">
      <Text size="xs" as="h6" m={0}>
        {label}
      </Text>
      <Editable w="100%" defaultValue={initialValue} onSubmit={handleSubmit}>
        <Flex alignItems="center">
          <EditablePreview />
          <EditIcon />
        </Flex>

        <EditableInput />
      </Editable>
    </Box>
  );
};

type ReadonlyLinePropsT = {
  label: string;
  value: string | undefined | null;
};
const ReadonlyLine = ({ label, value }: ReadonlyLinePropsT) => {
  return (
    <Box p={2} width="100%">
      <Heading size="xs" as="h6" m={0}>
        {label}
      </Heading>
      <Text marginY={2}>{value || 'N/A'}</Text>
    </Box>
  );
};
