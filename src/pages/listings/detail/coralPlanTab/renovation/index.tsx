/* eslint-disable complexity */
// TODO: refactor render function
import React, { Fragment, useEffect, useState, useRef } from 'react';
import {
  Text,
  Image,
  Box,
  AspectRatio,
  UnorderedList,
  ListItem,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { Images } from './images';
import { Title2 } from '../../../../../components/text';
import { useEmblaCarousel } from 'embla-carousel/react';
import type { ListingsPropertyDetailT } from '../../../../../shared-fullstack/types';

// import { RenovationEditModal } from './renovationEditModal';
// import { UserContext } from '../../../../../userContext';

type RenoDataT = Array<string & Array<string & Array<string>>>;

export const Renovation = ({ listingsDetail }: { listingsDetail: ListingsPropertyDetailT }) => {
  // const [user] = useContext(UserContext);
  const [renovationData, setRenovationData]: any = useState([]);
  // const [selectedValue, setSelectedValue] = useState(['curb appeal', 'kitchen', 'roof']);
  // const [text, setText] = useState('');
  const [viewportRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const textRef: React.MutableRefObject<any> = useRef();
  // const Admin = user?.isAdmin;

  useEffect(() => {
    // setText(textRef?.current?.innerText);
    if (emblaApi && emblaApi.slideNodes().length) {
      emblaApi.reInit();
    }
  }, [emblaApi, renovationData, setRenovationData]);
  useEffect(() => setRenovationData(listingsDetail.renovationsJsonb), []);

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
        <Text ref={textRef}>
          Given that the property is currently fully occupied, renovation will be staggered as
          leases expire and current tenants vocate their units. We anticipate finishing all
          renovations before January 2022.
        </Text>
      </Box>
      {renovationData !== null && renovationData.length === 0 ? (
        <Center h={60}>
          <Spinner />
        </Center>
      ) : renovationData ? (
        <Box className="embla">
          <Box className="embla__viewport" ref={viewportRef}>
            <Box className="embla__container" pb={6}>
              {renovationData?.map((value: RenoDataT, idx: number) => (
                <Box
                  className="embla__slide"
                  minW={{ base: 'calc(100% - 4rem)', sm: 'calc(100% - 6rem)' }}
                  mx={renovationData?.length === 1 ? 4 : { base: 1, sm: 2 }}
                  key={idx}
                >
                  <Box className="embla__slide__inner">
                    <Box width="100%">
                      {Images.map(({ title, image }) => {
                        return (
                          title.includes(value[0].toLowerCase()) && (
                            <AspectRatio
                              my={6}
                              key={title}
                              ratio={4 / 3}
                              cursor="pointer"
                              overflow="hidden"
                              boxShadow="sm"
                              borderRadius="2xl"
                            >
                              <Image src={image} alt="renovation" />
                            </AspectRatio>
                          )
                        );
                      })}
                      <Text fontWeight="bold" textTransform="capitalize" mb={3}>
                        {value[0]}
                      </Text>
                      <UnorderedList>
                        {value[1].map((val, idx) => (
                          <ListItem key={idx}>{val}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Fragment>
  );
};
