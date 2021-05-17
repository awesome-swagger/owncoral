import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

export const ImgSlider = ({ images }: { images: any }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {images.map((value: string) => (
        <div>
          <Image src={value} alt={value} />
        </div>
      ))}
    </Carousel>
  );
};
