import { Box } from '@chakra-ui/react';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Title3 } from '../../../../../../components/text';
import { ImgSlider } from '../../../../../../components';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Images = ({ propertyDetail }: PropertyLocationPropsT) => {
  const newImages = propertyDetail.imageUrls.slice(1);
  if (newImages.length === 0) return null;

  return (
    <Box>
      <Title3 my={4}>Images</Title3>
      <ImgSlider images={newImages} />
    </Box>
  );
};
