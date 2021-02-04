/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Card } from "../../components";

const RentDetail: React.FC = () => {
  return (
    <div css={{ width: "100%", maxWidth: "450px" }}>
      <h1 css={{ textAlign: "center" }}>Rent Detail</h1>
      <Card css={{ margin: "20px 0" }}>
        <div
          css={{
            padding: "13px",
          }}
        >
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Total Rent</h2> <h2>$21k/mo </h2>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 0",
              paddingLeft: "25px",
            }}
          >
            <h2>1 bedroom</h2>
            <h2>$15k x 6</h2>
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 0",
              paddingLeft: "25px",
            }}
          >
            <h2>2 bedroom</h2>
            <h2>$15k x 6</h2>
          </div>
          <hr />
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Tenants</h2> <h2>17</h2>
          </div>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Maintenance Requests (30 Days)</h2> <h2>5</h2>
          </div>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Maintenance Cost</h2> <h2>$1,200</h2>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default RentDetail;
