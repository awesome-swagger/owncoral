import { useCallback } from 'react';
import { PlaidLink } from 'react-plaid-link';
import { FlexContainer } from '../../../components';
import { useHistory } from 'react-router-dom';

export const LinkBankAccount = (props: any) => {
  const history = useHistory();
  const PlaidLinkToken = process.env.SNOWPACK_PUBLIC_PLAID_LINK_TOKEN;

  const handleOnSuccess = useCallback((token, metadata) => {
    // send token to server
    history.push('/transaction');
  }, []);

  return (
    <FlexContainer>
      <PlaidLink {...props} token={PlaidLinkToken} onSuccess={handleOnSuccess}>
        Connect Bank Account
      </PlaidLink>
    </FlexContainer>
  );
};
