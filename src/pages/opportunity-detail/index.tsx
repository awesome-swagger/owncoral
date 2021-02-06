/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { RouteComponentProps } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Nav,
  Content,
  Card,
  PrimaryBtn,
  Chart,
  CarouselImg
} from "../../components";
import Bottom from "./Bottom";

import OpportunityData from "../../data_static/OpportunityData";

type OpportunityParams = {
  id: string;
};
type OpportunityProps = RouteComponentProps<OpportunityParams>;

const OpportunityDetail: React.FC<OpportunityProps> = ({ match }) => {
  const id = match.params.id;
  return (
    <Fragment>
      <Nav />
      <Content>
        <Card
          css={css`
            max-width: 1250px;
            margin: 10px auto;
          `}
        >
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
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <div
              css={css`
                width: 30%;
              `}
            >
              <div
                css={css`
                  background-color: #f1f3f1;
                  width: 100%;
                  height: 50%;
                `}
              ></div>
              <div
                css={css`
                  height: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <Chart />
              </div>
            </div>
            <div
              css={css`
                width: 70%;
              `}
            >
              <Carousel showThumbs={false}>
                {OpportunityData[id].img.map((item: string, index: number) => (
                  <CarouselImg img={item} alt={item} key={index} />
                ))}
              </Carousel>
            </div>
          </div>
        </Card>
        <Bottom id={id} />
      </Content>
    </Fragment>
  );
};
export default OpportunityDetail;
