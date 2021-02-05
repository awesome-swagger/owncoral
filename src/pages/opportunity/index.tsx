/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";
import { Nav, Content, Card } from "../../components";
import { TopBar } from "./style";
import { Carousel } from "react-responsive-carousel";
import CarouselImg from "../../components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OpportunityData from "../../data_static/OpportunityData";
import { MapPin } from "react-feather";

type OpportunityParams = {
  id: string;
};
type OpportunityProps = RouteComponentProps<OpportunityParams>;

const Opportunity: React.FC<OpportunityProps> = ({ match }) => {
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
            justifyContent: "space-evenly",
          }}
        >
          {OpportunityData.map((item, index) => (
            <Link
              to={`/new-opportunities/${item.id}`}
              key={index}
              css={{ textDecoration: "none" }}
            >
              <Card
                css={css`
                  width: 100%;
                  max-width: 450px;
                  margin: 20px 0;
                `}
                hasLink
              >
                <div css={{ padding: "13px" }}>
                  <h2>{item.address}</h2>
                  <h4 css={{ color: "gray" }}>
                    <MapPin size={14} /> {item.city}
                  </h4>
                  <div
                    css={css`
                      position: absolute;
                      text-align: right;
                      right: 20px;
                      top: 13px;
                    `}
                  >
                    <h2>X units, Y beds</h2>
                    <h3>90% Funded</h3>
                  </div>
                </div>
                <Carousel showThumbs={false}>
                  {item.img.map((x, i) => (
                    <div
                      css={css`
                        height: 65vw;
                        max-height: 325px;
                      `}
                    >
                      <CarouselImg key={i} img={x} alt="img" />
                    </div>
                  ))}
                </Carousel>
                <p
                  css={css`
                    padding: 0 15px;
                    font-size: 1rem;
                  `}
                >
                  {item.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Content>
    </Fragment>
  );
};

export default Opportunity;
