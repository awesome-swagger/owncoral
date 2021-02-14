/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react/macro';
import { Card } from '../../components';
import { CardWrapper } from './style';

const AboutProperty: React.FC = () => {
  return (
    <CardWrapper>
      <h5 css={{ margin: '.3em 0' }}>About</h5>
      <Card>
        <div css={{ display: 'flex', flexDirection: 'column', padding: '2em' }}>
          <table
            css={css`
              font-size: 130%;
              font-weight: 600;
              tbody > tr {
                td:last-child {
                  text-align: right;
                }
              }
            `}
          >
            <tbody>
              <tr>
                <td>$21k / mo.</td>
                <td>96% occupied</td>
              </tr>
              <tr>
                <td>18 bd</td>
                <td>7,321 ft²</td>
              </tr>
            </tbody>
          </table>
          <hr css={{ width: '100%', margin: '1em 0', border: '1px solid lightgray' }} />
          <span css={{ fontSize: '110%' }}>
            3 Linden is a 2-story, 2-unit (each 3B / 1BR) apartment building, at the border of Cambridge-Somerville,
            right next to Union Square. We plan to renovate and refinance immediately after the purchase is complete,
            returning ~27% of invested capital in the first year.
          </span>
        </div>
      </Card>
    </CardWrapper>
  );
};
export default AboutProperty;
