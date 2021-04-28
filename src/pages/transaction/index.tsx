import React, { useState } from 'react';

import { ConfirmTransaction } from './confirmTransaction';
import { ProcessingTransaction } from './processingTransaction';
import { SucessTransaction } from './sucessTransaction';
import { FailedTransaction } from './failedTransaction';

export const Transaction = () => {
  const [transactionStep, setTransactionStep] = useState('confirmTrasaction');

  return (
    <>
      {transactionStep === 'confirmTrasaction' ? (
        <ConfirmTransaction handleTransaction={setTransactionStep} />
      ) : transactionStep === 'processingTransaction' ? (
        <ProcessingTransaction handleTransaction={setTransactionStep} />
      ) : (
        <SucessTransaction />
      )}
    </>
  );
};
