/* eslint-disable max-params */
// eslint-disable-next-line import/no-duplicates
import type React from 'react';
// eslint-disable-next-line import/no-duplicates
import type { ReactElement } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import { AspectRatio, Icon, Image, useColorModeValue } from '@chakra-ui/react';

import './style.css';

type ImgSliderPropsT = {
  images: string[];
  fallback?: ReactElement;
};
export const ImgSlider = ({ images, fallback }: ImgSliderPropsT) => {
  const BulletColor = useColorModeValue('gray', 'white');

  const arrowStyles: React.CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
    outline: 'none',
    background: '#00000050',
    borderRadius: '50%',
    padding: '.25rem',
    width: '2rem',
    height: '2rem',
  };

  const indicatorStyles: React.CSSProperties = {
    background: BulletColor,
    width: 10,
    height: 10,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%',
    outline: 'none',
    opacity: '.7',
  };

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 10 }}
          >
            <Icon as={FiChevronLeft} color="#FFF" h={6} w={6} ml="-2px" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 10 }}
          >
            <Icon as={FiChevronRight} color="#FFF" h={6} w={6} mr="-2px" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        // eslint-disable-line max-params
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#000' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {images.map((src: string, idx: number) => (
        <AspectRatio ratio={4 / 3} key={idx}>
          <Image src={src} alt={`Property image #${idx}`} fallback={fallback} />
        </AspectRatio>
      ))}
    </Carousel>
  );
};
