/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Card } from "../../components";

const PriceTable: React.FC = () => {
  return (
    <Card width={450} css={{ margin: "20px 0" }}>
      <div css={{ padding: "13px" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
          }}
        >
          <h2>Total Value</h2>
          <h2>$15k</h2>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
            paddingLeft: "25px",
          }}
        >
          <h2>Current Equity</h2>
          <h2>$15k</h2>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
            paddingLeft: "25px",
          }}
        >
          <h2>Prior Destributions</h2>
          <h2>$15k</h2>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
          }}
        >
          <h2>Initial Investment</h2>
          <h2>$15k</h2>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
          }}
        >
          <h2>Gain</h2>
          <h2>$15k(0%)</h2>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 0",
          }}
        >
          <h2>Ownership Stake</h2>
          <h2>10.5%</h2>
        </div>
      </div>
    </Card>
  );
};

export default PriceTable;
