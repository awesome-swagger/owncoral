/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { Nav, Content, Card, PrimaryBtn } from "../../components";
import OpportunityData from "../../data_static/OpportunityData";
import { css, jsx } from "@emotion/react";

const OpportunityDetail = ({ match }) => {
  const id = match.params.id;
  return (
    <Fragment>
      <Nav />
      <Content>
        <Card>
          <div
            css={css`
              padding: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <h2>{OpportunityData[id].address}</h2>
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <PrimaryBtn>Invest</PrimaryBtn>
              <PrimaryBtn>Deal Docs</PrimaryBtn>
            </div>
          </div>
        </Card>
      </Content>
    </Fragment>
  );
};
export default OpportunityDetail;
