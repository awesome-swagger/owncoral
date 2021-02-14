/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { css, jsx, useTheme } from '@emotion/react/macro';
import { Nav, Content } from '../../components';
import PriceTable from './PriceTable';
import AboutProperty from './AboutProperty';
import RentDetail from './RentDetail';
import CoOwners from './CoOwners';
import { CarouselImg, DetailBox, Container } from './style';

import PortfolioData from '../../data_static/PortfolioData';
import { TitleBar } from '@app/client-web/src/components/shared/TitleBar';
import { FiChevronLeft } from 'react-icons/fi';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

type PropertyParams = {
  id: string;
};
type PropertyProps = RouteComponentProps<PropertyParams>;

const Property: React.FC<PropertyProps> = ({ match }) => {
  const id = match.params.id;

  const propertyData = PortfolioData.find((property) => property.id === id);
  const theme = useTheme();

  // TODO: implement arrow controls
  // editorconfig-checker-disable
  // See: https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/master/navigation/arrows-and-dots/react?file=/src/App.js
  // editorconfig-checker-enable
  // TODO: wrap slider element in div to prevent growth when only few elements
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    spacing: 5,
    slidesPerView: 1,
    centered: true,
    initial: propertyData ? Math.floor(propertyData.img.length / 2) : 0,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 3,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: 5,
        mode: 'free-snap',
      },
    },
  });

  return (
    <Fragment>
      <Nav />
      <Content>
        <TitleBar css={{ justifyContent: 'flex-start', position: 'sticky', zIndex: 5, top: theme.navHeight }}>
          <Link to="/portfolio">
            <FiChevronLeft size={30} />
          </Link>
          &nbsp;&nbsp;
          <h5>{(propertyData || {}).address}</h5>
        </TitleBar>
        {propertyData && (
          <Fragment>
            <div ref={sliderRef} css={{ display: 'flex', margin: '0 0 20px 0', backgroundColor: theme.colors.bg2 }}>
              {propertyData.img.map((item, index) => (
                <div
                  className="keen-slider__slide"
                  css={css`
                    border-radius: 5px;
                  `}
                >
                  <CarouselImg src={item} alt={item} key={index} />
                </div>
              ))}
            </div>
            <Container>
              <PriceTable />
              <DetailBox>
                <AboutProperty />
                <RentDetail />
                <CoOwners />
              </DetailBox>
            </Container>
          </Fragment>
        )}
      </Content>
    </Fragment>
  );
};

export default Property;
