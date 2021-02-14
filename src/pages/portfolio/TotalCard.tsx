/** @jsxRuntime classic */
/** @jsx jsx */

import { StyledTotalCard } from '@app/client-web/src/pages/portfolio/style';
import { Table } from '@app/client-web/src/components/shared/Table';
import { jsx } from '@emotion/react/macro';
import { roundFinancial } from '@app/client-web/src/Utils';
import PortfolioData from '@app/client-web/src/data_static/PortfolioData';
import { RiPieChartLine } from 'react-icons/ri';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import React from 'react';
import { Th6i } from '../../components/shared/Typography';
import styled from '@emotion/styled/macro';

const sum = (arr: number[]) => {
  return arr.reduce((sum: number, n: number) => sum + n);
};

const TotalTable = styled(Table)`
  tbody > tr {
    td {
      * {
        vertical-align: text-top;
      }
      width: auto;
    }

    // Currency symbol
    td:nth-last-of-type(2) {
      width: 0.1%;
    }

    // Money amount, right-aligned
    td:last-of-type {
      text-align: right;
      width: 0.1%;
    }
  }
`;

export const TotalCard: React.FC = (props) => (
  <StyledTotalCard>
    <TotalTable>
      <tbody>
        <tr css={{ borderBottom: '2px solid lightgray' }}>
          <td colSpan={2}>
            <Th6i>Total Value</Th6i>
          </td>
          <td>$</td>
          <td>
            <Th6i css={{ margin: '.2em 0' }}>
              {roundFinancial(sum(PortfolioData.map((p) => p.mark + p.distribution)))}
            </Th6i>
          </td>
        </tr>
        <tr>
          <td css={{ width: '0.1%' }}>
            <RiPieChartLine size={20} />
          </td>
          <td>Current Equity</td>
          <td />
          <td>{roundFinancial(sum(PortfolioData.map((p) => p.mark)))}</td>
        </tr>
        <tr>
          <td css={{ width: '0.1%' }}>
            <FaRegMoneyBillAlt size={23} />
          </td>
          <td>Distributions</td>
          <td />
          <td>{roundFinancial(sum(PortfolioData.map((p) => p.distribution)))}</td>
        </tr>
        <tr>
          <td colSpan={2}>Initial Investment</td>
          <td>$</td>
          <td>{roundFinancial(sum(PortfolioData.map((p) => p.contribution)))}</td>
        </tr>
      </tbody>
    </TotalTable>
  </StyledTotalCard>
);
