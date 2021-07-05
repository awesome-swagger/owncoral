import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Center, Spinner } from '@chakra-ui/react';

import { ImgSlider } from '../../../../../../components';
import { Title2 } from '../../../../../../components/text';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Images = ({ propertyDetail }: PropertyLocationPropsT) => {
  const newImages = propertyDetail.imageUrls.slice(1);
  if (newImages.length === 0) return null;

  return (
    <Box>
      <Title2 my={4}>Photos</Title2>
      <ImgSlider
        images={newImages}
        fallback={
          <Center w="100%" h={(window.innerHeight / 100) * 40}>
            <Spinner />
          </Center>
        }
      />
    </Box>
  );
};
