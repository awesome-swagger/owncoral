
import type { PortfolioPropertyDetailT } from '../../../../../shared-fullstack/types';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Overline,Title2 } from '../../../../../components/text';

type TopSectionPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const TopSection = ({ propertyDetail }: TopSectionPropsT) => {
  return (
    <Box mt={6}>
      <Overline>
        {propertyDetail.address.cityLocality}, {propertyDetail.address.stateRegion}
      </Overline>
      <Title2>{propertyDetail.address.line1}</Title2>
      <Text textStyle="Headline">
        {propertyDetail.numUnits ? propertyDetail.numUnits + ' units' : 'N/A'} ·{' '}
        {propertyDetail.areaTotal
          ? propertyDetail.areaTotal.toFixed(0).toLocaleString() + ' ' + propertyDetail.areaUnits
          : 'N/A'}
      </Text>
      {propertyDetail.occupancyStatus !== null && (
        <Heading
          borderRadius="full"
          display="inline-block"
          fontSize="sm"
          mr={2}
          py={2}
          px={3}
          layerStyle="card"
          whiteSpace="nowrap"
        >
          {propertyDetail.occupancyStatus}
        </Heading>
      )}
      {propertyDetail.isUnderRenovation && (
        <Heading
          borderRadius="full"
          display="inline-block"
          fontSize="sm"
          mr={2}
          py={2}
          px={3}
          layerStyle="card"
          whiteSpace="nowrap"
        >
          Under renovation
        </Heading>
      )}
    </Box>
  );
};
