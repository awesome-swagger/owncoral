/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from './style';
import { FiChevronLeft } from 'react-icons/fi';

import { Nav, Content, PrimaryBtn, CarouselImg } from '../../components';
import Bottom from './Bottom';

import OpportunityData from '../../data_static/OpportunityData';

type OpportunityParams = {
  id: string;
};
type OpportunityProps = RouteComponentProps<OpportunityParams>;

const OpportunityDetail: React.FC<OpportunityProps> = ({ match }) => {
  const id = match.params.id;
  return (
    <Fragment>
      <Nav />
      <div css={{ width: '100%', marginTop: 85 }}>
        <Link to="/new-opportunities">
          <FiChevronLeft size={24} />
        </Link>
        <h2>{OpportunityData[id].address}</h2>
        <Carousel showThumbs={false} css={{ maxWidth: 650, margin: '0 auto' }}>
          {OpportunityData[id].img.map((item: string, index: number) => (
            <CarouselImg img={item} alt={item} key={index} />
          ))}
        </Carousel>
        <Box>
          <PrimaryBtn>Invest</PrimaryBtn>
          <PrimaryBtn>Deal Docs</PrimaryBtn>
        </Box>
      </div>
      <Content css={{ marginTop: 0, paddingTop: 0 }}>
        {/* TODO: add back map */}
        {/*<Container>*/}
        {/*  <div*/}
        {/*    css={css`*/}
        {/*      display: flex;*/}
        {/*    `}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      css={css`*/}
        {/*        width: 30%;*/}
        {/*      `}*/}
        {/*    >*/}
        {/*      <SmallBox>*/}
        {/*        <Location*/}
        {/*          center={{*/}
        {/*            lat: 59.95,*/}
        {/*            lng: 30.33,*/}
        {/*          }}*/}
        {/*          zoom={11}*/}
        {/*        />*/}
        {/*      </SmallBox>*/}

        {/*      <SmallBox>*/}
        {/*        <Chart />*/}
        {/*      </SmallBox>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*      css={css`*/}
        {/*        width: 70%;*/}
        {/*      `}*/}
        {/*    ></div>*/}
        {/*  </div>*/}
        {/*</Container>*/}
        <Bottom id={id} />
      </Content>
    </Fragment>
  );
};
export default OpportunityDetail;
