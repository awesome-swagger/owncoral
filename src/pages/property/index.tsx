/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { css, jsx } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapPin } from "react-feather";
import { RiPieChartLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Nav, Content } from "../../components";
import PriceTable from "./PriceTable";
import AboutProperty from "./AboutProperty";
import RentDetail from "./RentDetail";
import CoOwners from "./CoOwners";
import {
  CarouselImg,
  Box,
  DetailBox,
  Container,
  RightBox,
  SpaceBox,
} from "./style";

import { roundFinancial } from "./../../Utils";
import PortfolioData from "../../data_static/PortfolioData";

type PropertyParams = {
  id: string;
};
type PropertyProps = RouteComponentProps<PropertyParams>;

const Property: React.FC<PropertyProps> = ({ match }) => {
  const id = match.params.id;

  const propertyData = PortfolioData.find((property) => property.id === id);

  return (
    <Fragment>
      <Nav />
      <Content>
        {propertyData && (
          <Container>
            <Box>
              <SpaceBox>
                <h2>{propertyData.address}</h2>
                <h4 css={{ color: "gray" }}>
                  <MapPin size={14} /> {propertyData.city}
                </h4>
                <RightBox>
                  <h2>
                    $
                    {roundFinancial(
                      propertyData.mark + propertyData.distribution
                    )}
                  </h2>
                  <div css={{ color: "gray" }}>
                    <span>
                      <FaRegMoneyBillAlt
                        css={css`
                          margin-right: 0.25em;
                        `}
                      />
                      ${roundFinancial(propertyData.distribution)}
                    </span>
                    <span
                      css={css`
                        margin-left: 0.5em;
                      `}
                    >
                      <RiPieChartLine
                        css={css`
                          margin-right: 0.25em;
                        `}
                      />
                      ${roundFinancial(propertyData.mark)}
                    </span>
                  </div>
                </RightBox>
              </SpaceBox>
              <Carousel showThumbs={false}>
                {propertyData.img.map((item, index) => (
                  <div>
                    <CarouselImg src={item} alt={item} key={index} />
                  </div>
                ))}
              </Carousel>
            </Box>
            <DetailBox>
              <PriceTable />
              <AboutProperty />
              <RentDetail />
              <CoOwners />
            </DetailBox>
          </Container>
        )}
      </Content>
    </Fragment>
  );
};

export default Property;
