/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { MapPin } from "react-feather";
import { RiPieChartLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import PortfolioData from "../../data_static/PortfolioData";
import { TopBar, TotalCard, Box, BoxRight, Wrapper } from "./style";
import Nav from "../../components/navBar";
import { Content } from "../../components/content";
import Card from "../../components/card";

const sum = (arr: number[]) => {
  return arr.reduce((sum: number, n: number) => sum + n);
};

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

const Portfolio = () => {
  return (
    <Fragment>
      <Nav />
      <Content>
        <TopBar>
          <h3>Portfolio</h3>
        </TopBar>

        <TotalCard>
          <Wrapper>
            <Box>
              <div css={{ flexGrow: 1 }}>Total Value</div>
              <div css={{ flexGrow: 1, textAlign: "right" }}>
                {`$ ${roundFinancial(
                  sum(PortfolioData.map((p) => p.mark + p.distribution))
                )}`}
              </div>
            </Box>
          </Wrapper>
          <div
            css={css`
              border-bottom: 2px solid lightgray;
              padding: 8px 20px;
            `}
          >
            <Box>
              <div css={{ flexGrow: 1, textIndent: "1em" }}>
                <RiPieChartLine />
                &nbsp;Current Equity
              </div>
              <div css={{ flexGrow: 1, textAlign: "right" }}>
                ${roundFinancial(sum(PortfolioData.map((p) => p.mark)))}
              </div>
            </Box>
            <Box>
              <div css={{ flexGrow: 1, textIndent: "1em" }}>
                <FaRegMoneyBillAlt /> Prior Distributions
              </div>
              <div css={{ flexGrow: 1, textAlign: "right" }}>
                ${roundFinancial(sum(PortfolioData.map((p) => p.distribution)))}
              </div>
            </Box>
          </div>

          <div
            css={css`
              font-weight: bold;
              padding: 8px 20px;
            `}
          >
            <Box>
              <div css={{ flexGrow: 1 }}>Initial Investment</div>
              <div css={{ flexGrow: 1, textAlign: "right" }}>
                ${roundFinancial(sum(PortfolioData.map((p) => p.contribution)))}
              </div>
            </Box>
          </div>
        </TotalCard>

        <Box>
          {PortfolioData.map((propertyData, index) => (
            <Link
              to={`/properties/${propertyData.id}`}
              key={index}
              css={{ textDecoration: "none" }}
            >
              <Card width={450} height={350} css={{ margin: "20px 0" }} hasLink>
                <div css={{ padding: "13px" }}>
                  <h2>{propertyData.address}</h2>
                  <h4 css={{ color: "gray" }}>
                    <MapPin size={14} /> {propertyData.city}
                  </h4>
                  <BoxRight>
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
                  </BoxRight>
                </div>

                <img
                  css={css`
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    height: 100%;
                  `}
                  src={propertyData.img[0]}
                  alt={propertyData.address}
                />
              </Card>
            </Link>
          ))}
        </Box>
      </Content>
    </Fragment>
  );
};

export default Portfolio;
