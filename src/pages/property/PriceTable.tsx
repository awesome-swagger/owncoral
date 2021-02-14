/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react/macro';
import { TotalCard } from './style';
import { Table } from '@app/client-web/src/components/shared/Table';

const PriceTable: React.FC = () => {
  return (
    <TotalCard>
      <Table
        css={css`
          tr > td {
            text-indent: 1.5em;
          }

          tr > td:nth-child(2) {
            text-align: right;
            direction: rtl;
          }
        `}
      >
        <tr>
          <td>Total Value</td>
          <td>$15k</td>
        </tr>
        <tr>
          <td>Current Equity</td>
          <td>$15k</td>
        </tr>
        <tr>
          <td>Prior Distributions</td>
          <td>$15k</td>
        </tr>
        <tr>
          <td>Initial Investment</td>
          <td>$15k</td>
        </tr>
        <tr>
          <td>Gain</td>
          <td>$15k (0%)</td>
        </tr>
        <tr>
          <td>Ownership Stake</td>
          <td>10.5%</td>
        </tr>
      </Table>
    </TotalCard>
  );
};

export default PriceTable;
