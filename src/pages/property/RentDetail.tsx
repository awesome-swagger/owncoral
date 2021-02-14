/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react/macro';
import { Card } from '../../components';
import { CardWrapper } from './style';
import { Table } from '@app/client-web/src/components/shared/Table';

const RentDetail: React.FC = () => {
  return (
    <CardWrapper>
      <h5 css={{ margin: '.3em 0' }}>Rent Detail</h5>
      <Card css={{ padding: '1em 1.5em' }}>
        <Table
          css={css`
            font-size: 120%;

            tbody > tr {
              td {
                padding: 0.2em;

                &:nth-child(2) {
                  text-align: right;
                }
              }
            }
          `}
        >
          <tbody>
            <tr>
              <td>Monthly Rent</td>
              <td>$21k</td>
            </tr>
            <tr>
              <td>1 bedroom</td>
              <td>$15k x 6</td>
            </tr>
            <tr>
              <td>2 bedroom</td>
              <td>$15k x 6</td>
            </tr>
            <tr>
              <td>Tenants</td>
              <td>17</td>
            </tr>

            <tr>
              <td>Maintenance</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td># Requests (30d)</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </CardWrapper>
  );
};
export default RentDetail;
