import React, { useEffect, useRef, useState } from 'react';
import type {
  PortfolioPropertyDetailT,
  RenovationItemT,
} from '../../../../../../../shared-fullstack/types';
import {
  AspectRatio,
  Box,
  Center,
  Image,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
  Divider,
} from '@chakra-ui/react';
import useEmblaCarousel from 'embla-carousel-react';

import { Headline } from '../../../../../../../components/text';

import { RenovationImages } from '../../../../../../../lib/renovationImages';

type RenovationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const Upgrades = ({ propertyDetail }: RenovationPropsT) => {
  const [renovationData, setRenovationData] = useState(
    propertyDetail?.renovationsJsonb as RenovationItemT[],
  );
  const [viewportRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const textRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    if (emblaApi?.slideNodes().length) {
      emblaApi?.reInit();
    }
  }, [emblaApi, renovationData]);

  return (
    <React.Fragment>
      <Box pos="relative">
        {propertyDetail.renovationsOverview && (
          <Text ref={textRef}>{propertyDetail.renovationsOverview}</Text>
        )}
      </Box>
      {renovationData?.length && (
        <Box className="embla">
          <Box className="embla__viewport" ref={viewportRef}>
            <Box className="embla__container" pb={2}>
              {renovationData.map((value: RenovationItemT, idx: number) => {
                const img = RenovationImages[(value[0] as string).toLowerCase()];
                return (
                  <Box
                    className="embla__slide"
                    minW={{ base: 'calc(100% - 1rem)', sm: 'calc(100% - 2rem)' }}
                    mx={renovationData?.length === 1 ? 4 : { base: 1, sm: 2 }}
                    key={idx}
                  >
                    <Box className="embla__slide__inner">
                      <Box width="100%">
                        {img && (
                          <AspectRatio
                            my={6}
                            ratio={4 / 3}
                            cursor="pointer"
                            overflow="hidden"
                            boxShadow="sm"
                            borderRadius="2xl"
                          >
                            <Image src={img} alt="renovation" />
                          </AspectRatio>
                        )}
                        <Box px={2}>
                          <Headline textTransform="capitalize" mb={3}>
                            {value[0]}
                          </Headline>
                          <UnorderedList>
                            {(value[1] as string[]).map((val, idx) => (
                              <ListItem key={idx}>{val}</ListItem>
                            ))}
                          </UnorderedList>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      {renovationData?.length === 0 && (
        <Center h={60}>
          <Spinner />
        </Center>
      )}
      {propertyDetail.renovationsOverview && renovationData?.length && <Divider my={6} />}
    </React.Fragment>
  );
};
