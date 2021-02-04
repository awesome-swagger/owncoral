/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Card } from "../../components";

const AboutProperty: React.FC = () => {
  return (
    <div css={{ width: "100%", maxWidth: "450px" }}>
      <h1 css={{ textAlign: "center" }}>About</h1>
      <Card css={{ margin: "20px 0" }}>
        <div
          css={{
            display: "flex",
            padding: "13px",
          }}
        >
          <h2 css={{ textAlign: "center", width: "50%" }}>Description</h2>
          <div css={{ marginTop: "25px", width: "50%" }}>
            <h2>8 Units</h2>
            <h2>18 Beds</h2>
            <h2>7,321 ft</h2>
            <h2>$21k rent/mo</h2>
            <h2>92% Occupency</h2>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default AboutProperty;
