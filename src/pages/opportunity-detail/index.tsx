/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { RouteComponentProps } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Box, SmallBox, BoxY } from "./style";

import {
  Nav,
  Content,
  PrimaryBtn,
  Chart,
  CarouselImg,
  Location,
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
        <Container>
          <Box>
            <h2>{OpportunityData[id].address}</h2>
            <BoxY>
              <PrimaryBtn>Invest</PrimaryBtn>
              <PrimaryBtn>Deal Docs</PrimaryBtn>
            </BoxY>
          </Box>
          <div
            css={css`
              display: flex;
            `}
          >
            <div
              css={css`
                width: 30%;
              `}
            >
              <SmallBox>
                <Location
                  center={{
                    lat: 59.95,
                    lng: 30.33,
                  }}
                  zoom={11}
                />
              </SmallBox>

              <SmallBox>
                <Chart />
              </SmallBox>
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
        </Container>
        <Bottom id={id} />
      </Content>
    </Fragment>
  );
};
export default OpportunityDetail;
