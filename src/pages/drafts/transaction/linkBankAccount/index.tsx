import { useCallback, useContext,useEffect, useState } from 'react';
import { PlaidLink } from 'react-plaid-link';
import { Redirect,useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import { FlexContainer } from '../../../../components';
import { fetchWrap } from '../../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../../lib/errorToastOptions';
import { UserContext } from '../../../../userContext';

export const LinkBankAccount = (props: any) => {
  const [plaidLinkToken, setPlaidLinkToken] = useState(null);
  const { handleTransaction } = props;
  const toast = useToast();
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    const generateToken = async () => {
      const resp = await fetchWrap('/api/plaid/create-link-token', {
        method: 'POST',
      });

      if (resp === null) {
        return;
      }

      if (resp.ok) {
        const data = await resp.json();
        setPlaidLinkToken(data.link_token);
        return;
      }

      switch (resp.status) {
        case 401:
          setLoggedOut(true);
          break;
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            ...{
              description: 'Unable to get link token',
            },
          });
          break;
      }
    };

    generateToken();
  }, [toast]);

  const handleOnSuccess = useCallback(
    (token, metadata) => {
      // send token to server
      // console.log(token, metadata);

      handleTransaction('confirmTransaction');
    },
    [handleTransaction],
  );

  // Redirects logged out users to the logged in page
  // TODO: wrap this in a useLogout hook
  if (loggedOut) {
    window.location.assign("/login?flash=You've logged out");
  }

  return (
    <FlexContainer>
      {plaidLinkToken && (
        <PlaidLink {...props} token={plaidLinkToken} onSuccess={handleOnSuccess}>
          Connect Bank Account
        </PlaidLink>
      )}
    </FlexContainer>
  );
};
