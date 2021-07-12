import type { PortfolioPropertyDetailT } from '../../../../../../../shared-fullstack/types';
import RenovationImg from '../../../../../../../assets/CapturaRenovation.png';
import { Headline, Title2 } from '../../../../../../../components/text';
import { Box, Flex, Image, UnorderedList, ListItem } from '@chakra-ui/react';

type RenovationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};

export const Renovation = ({ propertyDetail }: RenovationPropsT) => {
  return (
    <Box>
      <Flex className="custom_scroll" overflow="auto" my={6}>
        <Image mx={2} src={RenovationImg} />
        <Image mx={2} src={RenovationImg} />
        <Image mx={2} src={RenovationImg} />
      </Flex>
      <Title2 my={6}>Renovation</Title2>
      <UnorderedList>
        <ListItem>Add 1 bathroom to each unit</ListItem>
      </UnorderedList>
    </Box>
  );
};
