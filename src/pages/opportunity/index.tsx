/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { css, jsx } from "@emotion/react";
import { Nav, Content, Card } from "../../components";
import { TopBar } from "./style";
import { Carousel } from "react-responsive-carousel";
import CarouselImg from "../../components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpportunityData from "../../data_static/OpportunityData";

type OpportunityParams = {
  id: string;
};
type OpportunityProps = RouteComponentProps<OpportunityParams>;

const Opportunity: React.FC<OpportunityProps> = ({ match }) => {
  //   const id = match.params.id;

  return (
    <Fragment>
      <Nav />
      <Content>
        <TopBar>
          <h3>Opportunity</h3>
        </TopBar>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Card
            css={css`
              margin: 20px 0;
              width: 100%;
              max-width: 750px;
              min-width: 450px;
              height: 55vw;
              max-height: 575px;
              min-height: 350px;
            `}
          >
            <Carousel>
              <CarouselImg img="" alt="img" />
              <CarouselImg img="" alt="img" />
            </Carousel>
          </Card>
        </div>
      </Content>
    </Fragment>
  );
};

export default Opportunity;
