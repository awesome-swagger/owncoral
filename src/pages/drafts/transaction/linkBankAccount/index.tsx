import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { PlaidLink } from 'react-plaid-link';
import { FlexContainer } from '../../../../components';

import { fetchWrap } from '../../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../../lib/errorToastOptions';

export const LinkBankAccount = (props: any) => {
  const [plaidLinkToken, setPlaidLinkToken] = useState(null);
  const { handleTransaction } = props;
  const toast = useToast();
  
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

  
  const handleOnSuccess = useCallback((token, metadata) => {
    // send token to server
    // console.log(token, metadata);

    handleTransaction('confirmTransaction');
  }, [handleTransaction]);

  return (
    <FlexContainer>
      { plaidLinkToken && (
        <PlaidLink {...props} token={plaidLinkToken} onSuccess={handleOnSuccess}>
          Connect Bank Account
        </PlaidLink>
      )}
    </FlexContainer>
  );
};
