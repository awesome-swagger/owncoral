import { useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Box, Heading, Center, Icon, Image } from '@chakra-ui/react';
import { FaChartLine } from 'react-icons/fa';
import { FiMap } from 'react-icons/fi';
import MapImg from '../../../../assets/Frame269.png';
import { Container, PropertyCard } from '../../../../components';
import { DummyData } from '../../../../lib/portfolioData';
import './embla.css';

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
    <NeighborhoodMap />,
    <PropertyCard data={PortfolioData} />,
    <PropertyCard data={PortfolioData} />,
  ];
  return (
    <Container px="0">
      <Box px={6} mb={6} pos="relative">
        <Box textAlign="center" borderRadius="full" boxShadow="xs" py={2} w="56" mx="auto">
          <Heading layerStyle="grayHeading" fontSize="sm" m="0">
            {PortfolioData?.stateRegion}
          </Heading>
          <Heading fontSize="sm" m="0">
            {PortfolioData?.cityLocality}
          </Heading>
        </Box>
      </Box>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((val, ind) => (
              <div className="embla__slide" key={ind}>
                <div className="embla__slide__inner">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const NeighborhoodMap = () => (
  <Box pos="relative" mx="auto" width="100%" borderRadius="2xl" overflow="hidden">
    <Image w="100%" src={MapImg} />
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
