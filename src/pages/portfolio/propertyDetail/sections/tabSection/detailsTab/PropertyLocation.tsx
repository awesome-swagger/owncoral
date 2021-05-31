import { FiMap } from 'react-icons/fi';
import type { PortfolioPropertyDetailT } from '../../../../../../shared-fullstack/types';
import { Box, Button, Center, Icon, Image, Text } from '@chakra-ui/react';

import { MapBox } from '../../../../../../components';
import { Title3 } from '../../../../../../components/text';
import { DummyData } from '../../../../../../lib/portfolioData';

type PropertyLocationPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const PropertyLocation = ({ propertyDetail }: PropertyLocationPropsT) => {
  return (
    <Box>
      <Title3 mb={3}>Property location</Title3>
      <Box pos="relative">
        <MapBox address={propertyDetail.address} />
        <Box h={2} />
        {/* Simplify this */}
        {/* <Center */}
        {/*  borderRadius="full" */}
        {/*  layerStyle="iconColor" */}
        {/*  pos="absolute" */}
        {/*  bottom={4} */}
        {/*  right={4} */}
        {/*  p={2} */}
        {/*  cursor="pointer" */}
        {/* > */}
        {/*  <Icon h={4} w={4} as={FiMap} /> */}
        {/* </Center> */}
      </Box>
      {propertyDetail.description && <Text>{propertyDetail.description}</Text>}

      {/* <Button colorScheme="secondary" variant="outline" my={4} w="100%"> */}
      {/*  Learn more about location */}
      {/* </Button> */}
    </Box>
  );
};
