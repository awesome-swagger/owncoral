import React, { useEffect, useState, useCallback } from 'react';
import { PlaidLink } from 'react-plaid-link';
import { FlexContainer } from '../../../../components';

export const LinkBankAccount = (props: any) => {
  const PlaidLinkToken = process.env.SNOWPACK_PUBLIC_PLAID_LINK_TOKEN;

  const handleOnSuccess = useCallback((token, metadata) => {
    // send token to server
    props.handleTransaction('confirmTransaction');
  }, []);

  return (
    <FlexContainer>
      <PlaidLink {...props} token={PlaidLinkToken} onSuccess={handleOnSuccess}>
        Connect Bank Account
      </PlaidLink>
    </FlexContainer>
  );
};
