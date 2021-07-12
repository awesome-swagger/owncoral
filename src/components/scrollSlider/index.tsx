import { Flex, Image } from '@chakra-ui/react';
import './style.css';

export const ScrollSlider = ({ images }) => {
  return (
    <Flex className="invisible_scroll" overflow="auto" h={60} my={6} mr={-6}>
      {images.map((val, ind) => (
        <Image src={val} key={ind} mr={6} borderRadius="2xl" h="100%" />
      ))}
    </Flex>
  );
};
