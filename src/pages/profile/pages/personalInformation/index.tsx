import React, { Fragment, useContext, useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import type { UserProfileT } from '../../../../shared-fullstack/types';
import {
  Box,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  IconButton,
  Spinner,
  Switch,
  Text,
  useEditableControls,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { parseISO } from 'date-fns';
import * as R from 'remeda';

import { BackBtn, DayPicker } from '../../../../components';
import type { SplitDateT } from '../../../../components/daypicker';
import { Title3 } from '../../../../components/text';
import { UserContext } from '../../../../userContext';
import { splitDate, updateCurrentUser } from './lib';
import { useHistory } from 'react-router-dom';

export const PersonalInformation = ({ goBack }: { goBack: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // We're using mostly uncontrolled components (Editables have their own state),
  // but we still load UserContext here to keep initial and post-edit state
  const [user, setUser, locationHistory] = useContext(UserContext);
  const [birthDate, setBirthDate] = useState<SplitDateT | null>(null);
  const [isAccredited, setIsAccredited] = useState<boolean>(false);
  const history = useHistory();
  const prevLocation = locationHistory[locationHistory.length - 1];

  console.log('prev location', prevLocation);
  useEffect(() => {
    if (user !== null) {
      setBirthDate(splitDate(parseISO(user.birthDate)));
      setIsAccredited(user.completedAccreditation);
    }
    setIsLoading(false);
  }, [user]);

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
    updateCurrentUser({ birthDate: bdAsDate.toISOString() }, { user, setUser, toast });
  };

  const makeSubmit = (key: keyof UserProfileT) => (newValue: string) =>
    updateCurrentUser({ [key]: newValue }, { user, setUser, toast });

  return (
    <Box>
      <BackBtn
        handleClick={() => (prevLocation !== '/profile' ? history.goBack() : goBack())}
        pos="absolute"
      />
      <Title3 mb={6} mt="0" mx="0" align="center">
        Personal Information
      </Title3>

      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <VStack spacing={0.25} alignItems="flex-start">
          <EditableLine
            label="First Name"
            initialValue={user?.legalFirst || ''}
            handleSubmit={makeSubmit('legalFirst')}
          />
          <EditableLine
            label="Last Name"
            initialValue={user?.legalLast || ''}
            handleSubmit={makeSubmit('legalLast')}
          />
          <Box p={3} width="100%">
            <Title3>Birthdate</Title3>
            <DayPicker date={birthDate as SplitDateT} onChange={handleDateChange} />
          </Box>

          <EditableLine
            label="Phone"
            initialValue={user?.phone || ''}
            handleSubmit={makeSubmit('phone')}
          />

          <ReadonlyLine label="Email" value={user?.email} />
          <ReadonlyLine label="Alternate Email" value={user?.emailAlt} />
          <Box p={3} width="100%">
            <Title3>Address</Title3>
            <Text marginY={2}>
              {R.flatMap(
                [
                  user?.addressResidency.line1,
                  user?.addressResidency.line2,
                  user?.addressResidency.line3,
                  `${user?.addressResidency.cityLocality}, ${user?.addressResidency.stateRegion} ` +
                    user?.addressResidency.postalCode,
                ].filter((text) => (text || '').length > 0),
                // eslint-disable-next-line react/jsx-key
                (text) => [text, <br />],
              )}
            </Text>
          </Box>

          <Box p={3} width="100%">
            <Title3>I&#39;m an accredited visitor</Title3>
            <Switch
              marginY={2}
              size="lg"
              isChecked={isAccredited}
              onChange={() => {
                const newIsAccredited = !isAccredited;
                setIsAccredited(newIsAccredited);
                updateCurrentUser(
                  { completedAccreditation: newIsAccredited },
                  { user, setUser, toast },
                );
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
      <Title3>{label}</Title3>
      <Text marginY={2}>{value || 'N/A'}</Text>
    </Box>
  );
};
