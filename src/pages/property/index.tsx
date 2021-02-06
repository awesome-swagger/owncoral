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
import { Nav, Content, Card } from "../../components";
import PriceTable from "./PriceTable";
import AboutProperty from "./AboutProperty";
import RentDetail from "./RentDetail";
import CoOwners from "./CoOwners";
import { CarouselImg } from './style';

import PortfolioData from "../../data_static/PortfolioData";

const FINANCIAL_UNIT_SUFFIX = ["", "K", "MM", "B", "T"];

const roundFinancial = (n: number) => {
  const nDigits = Math.floor(Math.log10(Math.abs(n)));
  if (nDigits >= 0) {
    const unitIdx = Math.floor(nDigits / 3);
    const nExtra = nDigits % 3 === 0 ? 1 : 0;
    return (
      (n / Math.pow(10, unitIdx * 3)).toFixed(nExtra) +
      FINANCIAL_UNIT_SUFFIX[unitIdx]
    );
  } else {
    return n;
  }
};

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
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Card
              css={css`
                margin: 20px 0;
                width: 100%;
                height: 65vw;
                max-width: 750px;
                min-height: 250px;
                max-height: 575px;
              `}
            >
              <div css={{ padding: "13px" }}>
                <h2>{propertyData.address}</h2>
                <h4 css={{ color: "gray" }}>
                  <MapPin size={14} /> {propertyData.city}
                </h4>
                <div
                  css={css`
                    position: absolute;
                    text-align: right;
                    right: 20px;
                    top: 13px;
                  `}
                >
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
                </div>
              </div>
              <Carousel showThumbs={false}>
                {propertyData.img.map((item, index) => (
                  <div>
                    <CarouselImg src={item} alt={item} key={index} />
                  </div>
                ))}
              </Carousel>
            </Card>
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
              `}
            >
              <PriceTable />
              <AboutProperty />
              <RentDetail />
              <CoOwners />
            </div>
          </div>
        )}
      </Content>
    </Fragment>
  );
};

export default Property;
