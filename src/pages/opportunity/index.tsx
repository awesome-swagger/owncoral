/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { Nav, Content } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import CarouselImg from '../../components/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OpportunityData from '../../data_static/OpportunityData';
import { MapPin } from 'react-feather';
import { Container, RightBox, Box, CarouselBox, TopBar } from './style';

// TODO: opportunity -> opportunities
const Opportunity = () => {
  return (
    <Fragment>
      <Nav />
      <Content>
        <TopBar>
          <h2>Opportunities</h2>
        </TopBar>
        <Box css={{ overscrollBehavior: 'none', overflow: 'none' }}>
          {OpportunityData.map((item, index) => (
            <Link to={`/new-opportunities/${item.id}`} key={index} css={{ textDecoration: 'none' }}>
              <Container hasLink css={{ overscrollBehavior: 'none', overflow: 'none' }}>
                <div css={{ padding: '13px' }}>
                  <h2>{item.address}</h2>
                  <h4 css={{ color: 'gray' }}>
                    <MapPin size={14} /> {item.city}
                  </h4>
                  <RightBox>
                    <h2>X units, Y beds</h2>
                    <h3>90% Funded</h3>
                  </RightBox>
                </div>

                <Carousel showThumbs={false} css={{ overscrollBehavior: 'none' }}>
                  {item.img.map((x, i) => (
                    <CarouselBox>
                      <CarouselImg key={i} img={x} alt="img" />
                    </CarouselBox>
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
              </Container>
            </Link>
          ))}
        </Box>
      </Content>
    </Fragment>
  );
};

export default Opportunity;
