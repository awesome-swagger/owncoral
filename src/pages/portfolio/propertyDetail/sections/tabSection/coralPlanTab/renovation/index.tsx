import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import { Box, Flex, Image, UnorderedList, ListItem } from '@chakra-ui/react';
import { Title2 } from '../../../../../../../components/text';
import { ScrollSlider } from '../../../../../../../components';

type RenovationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Renovation = ({ propertyDetail }: RenovationPropsT) => {
  return (
    <Box>
      <ScrollSlider images={propertyDetail.imageUrls} />
      <Title2 my={6}>Renovation</Title2>
      <UnorderedList>
        <ListItem>Add 1 bathroom to each unit</ListItem>
      </UnorderedList>
    </Box>
  );
};
