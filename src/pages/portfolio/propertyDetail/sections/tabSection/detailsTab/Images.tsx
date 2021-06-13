import { useEffect, useState } from 'react';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Title3 } from '../../../../../../components/text';
import { ImgSlider } from '../../../../../../components';

import { Box } from '@chakra-ui/react';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Images: React.FC = ({ propertyDetail }: PropertyLocationPropsT) => {
  const [images, setImages] = useState();
  useEffect(() => {
    const newImages = propertyDetail.imageUrls;
    newImages.shift();
    setImages(newImages);
  }, []);
  return (
    <Box>
      <Title3 my={4}>Images</Title3>
      <ImgSlider images={images} />
    </Box>
  );
};
