import type { Dispatch, SetStateAction } from 'react';
import type { UserProfileT } from './types';
import type { useToast } from '@chakra-ui/react';
import { parseISO } from 'date-fns';

import type { SplitDateT } from '../../../../components/daypicker';
import { fetchWrap } from '../../../../lib/api';
import { DEFAULT_ERROR_TOAST, DEFAULT_SUCCESS_TOAST } from '../../../../lib/errorToastOptions';

export const fetchCurrentUser = async ({
  setIsLoading,
  setInitialUser,
  setIsAccredited,
  setBirthDate,
  toast,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setBirthDate: Dispatch<SetStateAction<SplitDateT | null>>;
  setInitialUser: Dispatch<SetStateAction<UserProfileT | null>>;
  setIsAccredited: Dispatch<SetStateAction<boolean>>;
  toast: ReturnType<typeof useToast>;
}) => {
  setIsLoading(true);
  const resp = await fetchWrap('api/currentUser', { method: 'GET' });
  if (resp.ok) {
    const wireUser = (await resp.json()) as UserProfileT;
    setBirthDate(splitDate(parseISO(wireUser.birthDate)));
    setIsAccredited(wireUser?.completedAccreditation || false);
    setInitialUser(wireUser);
    setIsLoading(false);
    return;
  }

  switch (resp.status) {
    default:
      toast({
        ...DEFAULT_ERROR_TOAST,
        ...{
          description: 'Unable to load your profile',
        },
      });
      break;
  }
};

// Update some subset of fields in for the current user
export const updateCurrentUser = async (
  userPartial: Partial<UserProfileT>,
  toast: ReturnType<typeof useToast>,
) => {
  const resp = await fetchWrap('api/currentUserUpdate', {
    method: 'POST',
    body: JSON.stringify(userPartial),
  });
  const successToastId = '_SUCCESS';
  if (resp.ok) {
    // Only show one success toast at a time
    // https://chakra-ui.com/docs/feedback/toast#preventing-duplicate-toast
    if (!toast.isActive(successToastId)) {
      toast({
        ...DEFAULT_SUCCESS_TOAST,
        ...{
          id: successToastId,
          description: 'Personal information updated',
        },
      });
    }

    return;
  }

  switch (resp.status) {
    default:
      toast({
        ...DEFAULT_ERROR_TOAST,
        ...{
          description: 'Unable to update your profile',
        },
      });
      break;
  }
};

export const splitDate = (date: Date): SplitDateT => {
  return {
    year: date.getUTCFullYear().toString(),
    month: date.getUTCMonth().toString(),
    day: date.getUTCDate().toString(),
  };
};
