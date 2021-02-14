/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Card } from '../../components';
import OpportunityData from '../../data_static/OpportunityData';
import { LargeBox } from './style';

type OpportunityProps = {
  id: string;
};
const Bottom: React.FC<OpportunityProps> = ({ id }) => {
  return (
    <LargeBox>
      <h1 css={{ textAlign: 'center' }}>Why We Love It</h1>
      <div
        css={css`
          display: flex;
          max-width: 600px;
          margin: 0 auto;
        `}
      >
        <Card
          css={css`
            padding: 13px;
          `}
        >
          {OpportunityData[id].description}
        </Card>
        <Card>
          {OpportunityData[id].img.map((item: string, index: number) => (
            <img
              css={css`
                width: 100%;
              `}
              src={item}
              alt={item}
              key={index}
            />
          ))}
        </Card>
      </div>
    </LargeBox>
  );
};

export default Bottom;
