import type { ListingsPropertyDetailT } from '../../../../shared-fullstack/types';
import { Box, Center, Spinner } from '@chakra-ui/react';

import { ImgSlider } from '../../../../components';
import { Title2 } from '../../../../components/text';

type PropertyLocationPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};

export const Images = ({ listingsDetail }: PropertyLocationPropsT) => {
  const images = listingsDetail.imageUrls;

  return images.length ? (
    <Box>
      <Title2 my={4}>Photos</Title2>
      <ImgSlider
        images={images}
        fallback={
          <Center w="100%" h={window.innerHeight * 0.4}>
            <Spinner />
          </Center>
        }
      />
    </Box>
  ) : null;
};
