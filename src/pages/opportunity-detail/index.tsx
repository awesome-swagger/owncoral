/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { Nav, Content, Card, PrimaryBtn } from "../../components";
import OpportunityData from "../../data_static/OpportunityData";
import { css, jsx } from "@emotion/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg from "../../components/carousel";
import { Carousel } from "react-responsive-carousel";
import Chart from "../../components/chart";
import Bottom from "./Bottom";

const OpportunityDetail = ({ match }) => {
  const id = match.params.id;
  console.log(OpportunityData[id].img);
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
                {OpportunityData[id].img.map((item, index) => (
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
