// @ts-nocheck
import React, { useState } from 'react';
import { LinkBankAccount } from './linkBankAccount';
import { ConfirmTransaction } from './confirmTransaction';
import { ProcessingTransaction } from './processingTransaction';
import { SuccessTransaction } from './successTransaction';
import { FailedTransaction } from './failedTransaction';

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
