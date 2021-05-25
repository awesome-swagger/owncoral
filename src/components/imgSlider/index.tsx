import type React from 'react';
import { Image, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ImgSlider = ({ images }: { images: any }) => {
  const arrowStyles: React.CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
    outline: 'none',
    background: '#00000050',
    borderRadius: '50%',
  };

  const indicatorStyles: React.CSSProperties = {
    background: '#fff',
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
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 5 }}
          >
            <Icon as={FiChevronLeft} color="#FFF" h={8} w={8} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 5 }}
          >
            <Icon as={FiChevronRight} color="#FFF" h={8} w={8} />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => { // eslint-disable-line max-params
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
      {images.map((value: string, index: Number) => (
        <div key={`image-${index}`}>
          <Image src={value} alt={value} />
        </div>
      ))}
    </Carousel>
  );
};
