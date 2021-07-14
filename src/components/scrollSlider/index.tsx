import { Flex, Image } from '@chakra-ui/react';

type ScrollSliderPropsT = {
  images: string[];
};
export const ScrollSlider = ({ images }: ScrollSliderPropsT) => (
  <Flex
    css={{
      '&': { scrollbarWidth: 'none', msOverflowStyle: 'none' },
      '&::-webkit-scrollbar': { display: 'none' },
    }}
    h={60}
    my={6}
    mr={-6}
    overflow="auto"
  >
    {images.map((val, ind) => (
      <Image src={val} key={ind} mr={6} borderRadius="2xl" h="100%" />
    ))}
  </Flex>
);
