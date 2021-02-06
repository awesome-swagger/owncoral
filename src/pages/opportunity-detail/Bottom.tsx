/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Card } from "../../components";
import OpportunityData from "../../data_static/OpportunityData";

type OpportunityProps = {
  id: string;
};
const Bottom: React.FC<OpportunityProps> = ({ id }) => {
  return (
    <div
      css={css`
        max-width: 1250px;
        margin: 50px auto 0px auto;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        Why We Love It
      </h1>
      <div
        css={css`
          display: flex;
        `}
      >
        <Card
          css={css`
            padding: 15px;
          `}
        >
          <h2>{OpportunityData[id].description}</h2>
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
    </div>
  );
};

export default Bottom;
