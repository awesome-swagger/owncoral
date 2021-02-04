/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Card } from "../../components";

type ItemProps = {
  extraSpace?: boolean;
};

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding-left: ${(props: ItemProps) => (props.extraSpace ? "25px" : "0px")};
`;

const PriceTable: React.FC = () => {
  return (
    <Card width={450} css={{ margin: "20px 0" }}>
      <div css={{ padding: "13px" }}>
        <Item>
          <h2>Total Value</h2>
          <h2>$15k</h2>
        </Item>
        <Item extraSpace={true}>
          <h2>Current Equity</h2>
          <h2>$15k</h2>
        </Item>
        <Item extraSpace={true}>
          <h2>Prior Destributions</h2>
          <h2>$15k</h2>
        </Item>
        <Item>
          <h2>Initial Investment</h2>
          <h2>$15k</h2>
        </Item>
        <Item>
          <h2>Gain</h2>
          <h2>$15k(0%)</h2>
        </Item>
        <Item>
          <h2>Ownership Stake</h2>
          <h2>10.5%</h2>
        </Item>
      </div>
    </Card>
  );
};

export default PriceTable;
