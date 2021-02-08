/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import { CardWrapper, SpaceBox } from "./style";

const AboutProperty: React.FC = () => {
  return (
    <CardWrapper>
      <h1> About </h1>
      <Card>
        <SpaceBox flex>
          <h2
            css={css`
              text-align: center;
              width: 50%;
            `}
          >
            Description
          </h2>
          <div
            css={css`
              margin-top: 25px;
              width: 50%;
            `}
          >
            <h2>8 Units</h2>
            <h2>18 Beds</h2>
            <h2>7,321 ft</h2>
            <h2>$21k rent/mo</h2>
            <h2>92% Occupency</h2>
          </div>
        </SpaceBox>
      </Card>
    </CardWrapper>
  );
};
export default AboutProperty;
