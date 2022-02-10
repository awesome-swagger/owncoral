import type { Dispatch, SetStateAction } from 'react';
import type { UserProfileT } from '../../../../shared-fullstack/types';
import type { useToast } from '@chakra-ui/react';

import { fetchWrap } from '../../../../lib/api';
import { DEFAULT_ERROR_TOAST, DEFAULT_SUCCESS_TOAST } from '../../../../lib/errorToastOptions';

// Update some subset of fields in for the current user
export const updateCurrentUser = async (
  userPartial: Partial<UserProfileT>,
  {
    user,
    setUser,
    toast,
  }: {
    user: UserProfileT | null;
    setUser: Dispatch<SetStateAction<UserProfileT | null>>;
    toast: ReturnType<typeof useToast>;
  },
) => {
  // TODO: also set UserContext
  const resp = await fetchWrap('/api/currentUserUpdate', {
    method: 'POST',
    body: JSON.stringify(userPartial),
  });

  if (resp === null) {
    return;
  }

  const successToastId = '_SUCCESS';
  if (resp.ok) {
    if (user !== null) {
      setUser({
        ...user,
        ...userPartial,
      });
    }

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
