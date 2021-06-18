import { Box } from '@chakra-ui/react';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
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
      <ImgSlider images={newImages} />
    </Box>
  );
};
