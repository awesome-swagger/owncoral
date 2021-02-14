/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, css } from '@emotion/react/macro';
import { Link } from 'react-router-dom';
import PortfolioData from '../../data_static/PortfolioData';
import { Grid, RatioContainer } from './style';
import Nav from '../../components/navBar';
import { Content } from '../../components/content';
import { TitleBar } from '../../components/shared/TitleBar';
import { PropertyHeader } from '@app/client-web/src/pages/portfolio/PropertyHeader';
import { TotalCard } from '@app/client-web/src/pages/portfolio/TotalCard';

const Portfolio = () => {
  return (
    <Fragment>
      <Nav />
      <Content>
        <TitleBar>
          <h4>Portfolio</h4>
        </TitleBar>

        <TotalCard />

        <Grid>
          {PortfolioData.map((propertyData, index) => (
            <RatioContainer>
              <Link to={`/properties/${propertyData.id}`} key={index} css={{ textDecoration: 'none' }}>
                <PropertyHeader propertyData={propertyData} />
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
              </Link>
            </RatioContainer>
          ))}
        </Grid>
      </Content>
    </Fragment>
  );
};

export default Portfolio;
