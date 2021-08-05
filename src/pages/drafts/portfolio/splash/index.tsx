import { useEffect, useCallback, Fragment } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Box, Flex, Center, Icon, Button } from '@chakra-ui/react';
import { FaChartLine } from 'react-icons/fa';
import { FiMap, FiInfo, FiChevronLeft } from 'react-icons/fi';
import MapImg from '../../../../assets/Frame269.png';
import { Container, PropertyCard, NavBar } from '../../../../components';
import { Title2 } from '../../../../components/text';
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
    <Fragment>
      <NavBar />

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
              h={{ base: `calc(${window.innerHeight}px - 14rem)`, md: 'calc(725px - 7rem)' }}
            >
              {slides.map((val, ind) => (
                <Box className="embla__slide" key={ind}>
                  <Box className="embla__slide__inner">{val}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Fragment>
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
