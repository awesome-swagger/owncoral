import React from "react";
import { Card } from "../../components";
import { CardWrapper, PriceItem, SpaceBox } from "./style";

const PriceTable: React.FC = () => {
  return (
    <CardWrapper>
      <Card>
        <SpaceBox>
          <PriceItem>
            <h2>Total Value</h2>
            <h2>$15k</h2>
          </PriceItem>
          <PriceItem extraSpace>
            <h2>Current Equity</h2>
            <h2>$15k</h2>
          </PriceItem>
          <PriceItem extraSpace>
            <h2>Prior Distributions</h2>
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
        </SpaceBox>
      </Card>
    </CardWrapper>
  );
};

export default PriceTable;
