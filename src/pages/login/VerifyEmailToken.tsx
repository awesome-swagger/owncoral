import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import { Loading } from '../../components';
import { fetchWrap } from '../../lib/api';
import { DEFAULT_ERROR_TOAST, DEFAULT_SUCCESS_TOAST, DEFAULT_WARNING_TOAST } from '../../lib/errorToastOptions';

const VerifyEmailToken = () => {
  const { verifyEmailToken, email } = useParams<{ verifyEmailToken: string, email: string }>();
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const resp = await fetchWrap(
        '/api/verify-email',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            verifyEmailToken,
          }),
        },
        /* ignoreCookieExpiry */ true,
      );

      if (resp?.ok) {
        toast({
          ...DEFAULT_SUCCESS_TOAST,
          description: 'Your email has been verified',
          duration: 9000,
        });
      } else {
        switch (resp?.status) {
          case 409:
            toast({
              ...DEFAULT_WARNING_TOAST,
              description: 'Your email was already verified.',
            });
            break;
          default:
            toast({
              ...DEFAULT_ERROR_TOAST,
              description: 'Unable to verify your email',
            });
            break;
        }
      }
      history.push('/');
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Loading />;
};

// eslint-disable-next-line import/no-default-export
export default VerifyEmailToken;
