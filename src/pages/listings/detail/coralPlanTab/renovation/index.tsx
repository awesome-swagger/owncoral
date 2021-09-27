// TODO: refactor render function
import React, { Fragment, useEffect, useRef, useState } from 'react';
import type {
  ListingsPropertyDetailT,
  RenovationItemT
} from '../../../../../shared-fullstack/types';
import {
  AspectRatio,
  Box,
  Center,
  Image,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useEmblaCarousel } from 'embla-carousel/react';

import { Headline, Title2 } from '../../../../../components/text';
// import { UserContext } from '../../../../../userContext';
// import { RenovationEditModal } from './renovationEditModal';
import { RenovationImages } from '../../../../../lib/renovationImages';

type RenovationPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const Renovation = ({ listingsDetail }: RenovationPropsT) => {
  // const [user] = useContext(UserContext);
  // const Admin = user?.isAdmin;
  // const [text, setText] = useState('');
  const [renovationData, setRenovationData] = useState(
    listingsDetail?.renovationsJsonb as RenovationItemT[],
  );
  const [viewportRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const textRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    // setText(textRef?.current?.innerText);
    if (emblaApi?.slideNodes().length) {
      emblaApi?.reInit();
    }
  }, [emblaApi, renovationData]);

  return (
    <Fragment>
      <Box px={6} pos="relative">
        {/* {Admin && (
          <RenovationEditModal
            text={text}
            setText={setText}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            textRef={textRef}
          />
        )} */}
        <Title2 my={6}>Renovation</Title2>
        {listingsDetail.renovationsOverview && (
          <Text ref={textRef}>{listingsDetail.renovationsOverview}</Text>
        )}
      </Box>
      {renovationData?.length && (
        <Box className="embla">
          <Box className="embla__viewport" ref={viewportRef}>
            <Box className="embla__container" pb={6}>
              {renovationData.map((value: RenovationItemT, idx: number) => {
                const img = RenovationImages[(value[0] as string).toLowerCase()];
                return (
                  <Box
                    className="embla__slide"
                    minW={{ base: 'calc(100% - 4rem)', sm: 'calc(100% - 6rem)' }}
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
    </Fragment>
  );
};
