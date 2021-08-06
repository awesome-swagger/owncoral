/* eslint-disable max-params */
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import {
  AspectRatio,
  Box,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEmblaCarousel } from 'embla-carousel/react';

import './style.css';

import { DotButton, NextButton, PrevButton } from './EmblaCarouselButtons';

type ImgSliderPropsT = {
  images: string[];
  fallback?: ReactElement;
};

export const ImgSlider = ({ images, fallback }: ImgSliderPropsT) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <CenterCarousel
        images={images}
        fallback={fallback}
        setImageIndex={setImageIndex}
        onOpen={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside" isCentered>
        <ModalOverlay />
        <ModalContent h="auto" borderRadius={25} overflow="hidden">
          <Icon
            pos="absolute"
            zIndex="1"
            top={10}
            left={10}
            h={8}
            w={8}
            p={1}
            as={FiX}
            cursor="pointer"
            onClick={onClose}
            borderRadius="full"
            boxShadow="base"
            layerStyle="iconColor"
          />
          <ModalBody p={0} borderRadius="2xl" boxShadow="sm" h="100%">
            <Image
              w="100%"
              maxW="800px"
              maxH="600px"
              src={images[imageIndex]}
              alt="property_image"
              fallback={fallback}
              sx={{ objectFit: 'contain' }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const CenterCarousel = ({
  images,
  fallback,
  setImageIndex,
  onOpen,
}: {
  images: any;
  fallback: any;
  setImageIndex: any;
  onOpen: any;
}) => {
  const [isTouch] = useMediaQuery('(pointer: coarse)');

  const [viewportRef, embla]: any = useEmblaCarousel({
    loop: true,
    draggable: isTouch,
    dragFree: false,
    skipSnaps: true,
    inViewThreshold: 20,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [parallaxValues, setParallaxValues] = useState([]);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla?.scrollTo(index), [embla]);

  const PARALLAX_FACTOR = 1.2;

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.dangerouslyGetEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap: number, index: number) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem: any) => {
          const target = loopItem.getTarget();
          if (index === loopItem.index && target !== 0) {
            diffToTarget = scrollSnap + (1 - Math.sign(target) * scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    onScroll();
    embla.on('select', onSelect);
    embla.on('scroll', onScroll);
    embla.on('resize', onScroll);
  }, [embla, onSelect, onScroll, setScrollSnaps]);
  return (
    <Box className="embla">
      <Box className="embla__viewport" ref={viewportRef}>
        <Box className="embla__container">
          {images?.map((src: string, idx: number) => (
            <Box
              className="embla__slide"
              key={idx}
              onClick={() => {
                setImageIndex(idx);
                onOpen();
              }}
            >
              <Box className="embla__slide__inner" h={{ base: '250px', sm: '325px', md: '300px' }}>
                <Box
                  className="embla__slide__parallax"
                  style={{ transform: `translateX(${parallaxValues[idx]}%)` }}
                >
                  <AspectRatio
                    mx={2}
                    my={6}
                    ratio={4 / 3}
                    cursor="pointer"
                    overflow="hidden"
                    boxShadow="sm"
                    borderRadius="2xl"
                  >
                    <Image src={src} alt={`Property image #${idx}`} fallback={fallback} />
                  </AspectRatio>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <Box className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Box>
    </Box>
  );
};
