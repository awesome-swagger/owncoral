/* eslint-disable complexity */
// TODO: refactor render function
import React, { Fragment, useContext, useEffect, useState, useRef } from 'react';
import { Text, Image, Box, AspectRatio, UnorderedList, ListItem } from '@chakra-ui/react';
import { RenovationData } from './renovationData';
import { Title2 } from '../../../../../components/text';
import { useEmblaCarousel } from 'embla-carousel/react';
import { UserContext } from '../../../../../userContext';
import { RenovationEditModal } from './renovationEditModal';

export const Renovation = () => {
  const [user] = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState(['curb appeal', 'kitchen', 'roof']);
  const [text, setText] = useState('');
  const [viewportRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const textRef: React.MutableRefObject<any> = useRef();
  const Admin = user?.isAdmin;

  const FilteredValue = RenovationData.filter(({ title }) => selectedValue.indexOf(title) > -1);

  useEffect(() => {
    setText(textRef?.current?.innerText);
    if (emblaApi && emblaApi.slideNodes().length !== selectedValue.length) {
      emblaApi.reInit();
    }
  }, [emblaApi, selectedValue]);

  return (
    <Fragment>
      <Box px={6} pos="relative">
        {Admin && (
          <RenovationEditModal
            text={text}
            setText={setText}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            textRef={textRef}
          />
        )}
        <Title2 my={6}>Renovation</Title2>
        <Text ref={textRef}>
          Given that the property is currently fully occupied, renovation will be staggered as
          leases expire and current tenants vocate their units. We anticipate finishing all
          renovations before January 2022.
        </Text>
      </Box>
      <Box className="embla">
        <Box className="embla__viewport" ref={viewportRef}>
          <Box className="embla__container" pb={6}>
            {FilteredValue.map(({ title, image, renovationList }, idx) => (
              <Box
                className="embla__slide"
                minW="87%"
                mx={FilteredValue.length === 1 ? 4 : 2}
                key={idx}
              >
                <Box className="embla__slide__inner">
                  <Box width="100%">
                    <AspectRatio
                      my={6}
                      ratio={4 / 3}
                      cursor="pointer"
                      overflow="hidden"
                      boxShadow="sm"
                      borderRadius="2xl"
                    >
                      <Image src={image} alt="renovation" />
                    </AspectRatio>
                    <Title2 textTransform="capitalize" mb={3}>
                      {title}
                    </Title2>
                    <UnorderedList>
                      {renovationList.map((val, idx) => (
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
    </Fragment>
  );
};
