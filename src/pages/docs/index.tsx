/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { Nav, Content, Card } from "../../components";
import { TopBar } from "../opportunity/style";
import { css, jsx } from "@emotion/react";

const Docs = () => {
  return (
    <Fragment>
      <Nav />
      <Content>
        <TopBar>Documents</TopBar>
        <Card
          css={css`
            padding: 15px;
            margin: 10px auto;
            max-width: 750px;
            text-align: center;
          `}
        >
          <h2>Balance Sheet</h2>
          <h2>Income Sheet</h2>
          <h2>Closing Documents</h2>
          <h2>Tax Documents</h2>
        </Card>
      </Content>
    </Fragment>
  );
};
export default Docs;
