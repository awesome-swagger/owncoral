import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import RenovationImg from '../../../../../../../assets/CapturaRenovation.png';
import { Headline, Title2 } from '../../../../../../../components/text';
import { ScrollSlider } from '../../../../../../../components';
import { Box, Flex, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { Title2 } from '../../../../../../../components/text';

type RenovationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

const images = [RenovationImg, RenovationImg, RenovationImg];

export const Renovation = ({ propertyDetail }: RenovationPropsT) => {
  return (
    <Box>
      <ScrollSlider images={images} />
      <Title2 my={6}>Renovation</Title2>
      <UnorderedList>
        <ListItem>Add 1 bathroom to each unit</ListItem>
      </UnorderedList>
    </Box>
  );
};
