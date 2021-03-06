import { useEffect, useCallback } from 'react';
import { FaChartLine } from 'react-icons/fa';
import { FiChevronLeft, FiInfo, FiMap } from 'react-icons/fi';
import { Box, Button, Center, Flex, Icon } from '@chakra-ui/react';
import useEmblaCarousel from 'embla-carousel-react';

import MapImg from '../../../../assets/Frame269.png';
import { Container } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { DummyData } from '../../../../lib/portfolioData';

/*
  TODO:
    - Clicking house on neighborhood (low-poly) map leads to property card
    - Allow click-through property card into property details
    - Use framer-motion rather than react-swipeable
    - Working low-poly
 */
const PortfolioSplash = () => {
  const PortfolioData = DummyData;
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  const slides = [
    <NeighborhoodMap key="Neighborhood Map" />,
  ];

  return (
    <Container
      minH="0"
      h={{ base: `calc(${window.innerHeight}px - 8rem)`, md: '725px' }}
      px="0"
      pb="0"
    >
      <Flex justifyContent="space-between" alignItems="center" px={6} mb={6}>
        <Button colorScheme="white" w={10} h={10}>
          <Icon as={FiChevronLeft} />
        </Button>
        <Title2>{PortfolioData?.stateRegion}</Title2>
        <Button colorScheme="white" w={10} h={10}>
          <Icon as={FiInfo} />
        </Button>
      </Flex>
      <Box className="embla">
        <Box className="embla__viewport" ref={viewportRef}>
          <Box
            className="embla__container"
            pb={6}
            h={{ base: `calc(${window.innerHeight}px - 14rem)`, md: 'calc(725px - 7rem)' }}
          >
            {slides.map((val, ind) => (
              <Box className="embla__slide" minW="85%" p="0" mx={2} key={ind}>
                <Box className="embla__slide__inner" h="100%">
                  {val}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const NeighborhoodMap = () => (
  <Box
    pos="relative"
    mx="auto"
    w="100%"
    h="100%"
    borderRadius="2xl"
    overflow="hidden"
    bg={`url(${MapImg}) center`}
    bgSize="cover"
  >
    <Center
      borderRadius="full"
      layerStyle="iconColor"
      pos="absolute"
      bottom={4}
      right={4}
      p={3}
      cursor="pointer"
    >
      <Icon h={6} w={6} as={FiMap} />
    </Center>
    <Center
      borderRadius="full"
      layerStyle="iconColor"
      pos="absolute"
      bottom={16}
      right={4}
      p={3}
      cursor="pointer"
      mb={2}
    >
      <Icon h={6} w={6} as={FaChartLine} />
    </Center>
  </Box>
);

// eslint-disable-next-line import/no-default-export
export default PortfolioSplash;
