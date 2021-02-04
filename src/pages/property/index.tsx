/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { RouteComponentProps } from "react-router";
import { css, jsx } from "@emotion/react";
import { MapPin } from "react-feather";
import { RiPieChartLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import PortfolioData from "../../data_static/PortfolioData";
import { Nav, Content, Card } from "../../components";
import PriceTable from "./PriceTable";
import AboutProperty from "./AboutProperty";
import RentDetail from "./RentDetail";
import CoOwners from "./CoOwners";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
              justifyContent: "space-evenly",
            }}
          >
            <Card width={450} height={350} css={{ margin: "20px 0" }}>
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
                    <FaRegMoneyBillAlt />
                    &nbsp;$
                    {roundFinancial(propertyData.distribution)}
                    &nbsp;&nbsp;
                    <RiPieChartLine />
                    &nbsp;${roundFinancial(propertyData.mark)}
                  </div>
                </div>
              </div>
              <Carousel>
                <div>
                  <img
                    css={css`
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                      height: 100%;
                    `}
                    src={propertyData.img}
                    alt={propertyData.address}
                  />
                </div>
                <div>
                  <img
                    css={css`
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                      height: 100%;
                    `}
                    src={propertyData.img}
                    alt={propertyData.address}
                  />
                </div>
                <div>
                  <img
                    css={css`
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                      height: 100%;
                    `}
                    src={propertyData.img}
                    alt={propertyData.address}
                  />
                </div>
              </Carousel>
            </Card>
            <PriceTable />
            <AboutProperty />
            <RentDetail />
            <CoOwners />
          </div>
        )}
      </Content>
    </Fragment>
  );
};

export default Property;
