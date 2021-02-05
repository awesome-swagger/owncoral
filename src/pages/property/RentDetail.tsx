/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import { RentItem } from "./style";

const RentDetail: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        min-width: 450px;
        max-width: 750px;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        Rent Detail
      </h1>
      <Card
        css={css`
          margin: 20px 0;
        `}
      >
        <div
          css={css`
            padding: 13px;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <h2>Total Rent</h2> <h2>$21k/mo </h2>
          </div>
          <RentItem extraSpace={true}>
            <h2>1 bedroom</h2>
            <h2>$15k x 6</h2>
          </RentItem>
          <RentItem extraSpace={true}>
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
        </div>
      </Card>
    </div>
  );
};
export default RentDetail;
