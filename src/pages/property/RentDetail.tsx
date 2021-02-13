import React from "react";
import { Card } from "../../components";
import { RentItem, CardWrapper, SpaceBox } from "./style";

const RentDetail: React.FC = () => {
  return (
    <CardWrapper>
      <h1> Rent Detail </h1>
      <Card>
        <SpaceBox>
          <RentItem>
            <h2>Total Rent</h2> <h2>$21k/mo </h2>
          </RentItem>
          <RentItem extraSpace>
            <h2>1 bedroom</h2>
            <h2>$15k x 6</h2>
          </RentItem>
          <RentItem extraSpace>
            <h2>2 bedroom</h2>
            <h2>$15k x 6</h2>
          </RentItem>
          <hr />
          <RentItem>
            <h2>Tenants</h2> <h2>17</h2>
          </RentItem>
          <RentItem>
            <h2>Maintenance Requests (30 Days)</h2> <h2>5</h2>
          </RentItem>
          <RentItem>
            <h2>Maintenance Cost</h2> <h2>$1,200</h2>
          </RentItem>
        </SpaceBox>
      </Card>
    </CardWrapper>
  );
};
export default RentDetail;
