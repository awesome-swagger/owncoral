/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import { PriceItem } from "./style";

const PriceTable: React.FC = () => {
  return (
    <Card
      css={css`
        width: 100%;
        min-width: 450px;
        max-width: 750px;
        margin: 20px 0;
      `}
    >
      <div css={{ padding: "13px" }}>
        <PriceItem>
          <h2>Total Value</h2>
          <h2>$15k</h2>
        </PriceItem>
        <PriceItem extraSpace={true}>
          <h2>Current Equity</h2>
          <h2>$15k</h2>
        </PriceItem>
        <PriceItem extraSpace={true}>
          <h2>Prior Destributions</h2>
          <h2>$15k</h2>
        </PriceItem>
        <PriceItem>
          <h2>Initial Investment</h2>
          <h2>$15k</h2>
        </PriceItem>
        <PriceItem>
          <h2>Gain</h2>
          <h2>$15k(0%)</h2>
        </PriceItem>
        <PriceItem>
          <h2>Ownership Stake</h2>
          <h2>10.5%</h2>
        </PriceItem>
      </div>
    </Card>
  );
};

export default PriceTable;
