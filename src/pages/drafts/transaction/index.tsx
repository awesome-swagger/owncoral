import { useState } from 'react';

import { ConfirmTransaction } from './confirmTransaction';
import { FailedTransaction } from './failedTransaction';
import { LinkBankAccount } from './linkBankAccount';
import { ProcessingTransaction } from './processingTransaction';
import { SuccessTransaction } from './successTransaction';

const Transaction = () => {
  const [transactionStep, setTransactionStep] = useState('linkBankAccount');

  const Component = {
    linkBankAccount: LinkBankAccount,
    confirmTransaction: ConfirmTransaction,
    processingTransaction: ProcessingTransaction,
    successTransaction: SuccessTransaction,
    failedTransaction: FailedTransaction,
  }[transactionStep];

  if (!Component) return null;

  return <Component handleTransaction={setTransactionStep} />;
};

// eslint-disable-next-line import/no-default-export
export default Transaction;
