import type { PortfolioPropertyDetailT } from '../../../../../shared-fullstack/types';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Caption1, Overline, Title2 } from '../../../../../components/text';

type TopSectionPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const TopSection = ({ propertyDetail }: TopSectionPropsT) => {
  const propertySummary = [
    propertyDetail.numUnits ? propertyDetail.numUnits + ' units' : null,
    propertyDetail.numBeds ? propertyDetail.numBeds + ' beds' : null,
    propertyDetail.numBaths ? propertyDetail.numBaths + ' baths' : null,
    propertyDetail.areaLiving
      ? propertyDetail.areaLiving.toFixed(0).toLocaleString() + ' ' + propertyDetail.areaUnits
      : null,
  ]
    .filter((s) => s !== null)
    .join('  ·  ');

  return (
    <Box mt={6}>
      <Overline>
        {propertyDetail.address.cityLocality}, {propertyDetail.address.stateRegion}
      </Overline>
      <Title2 my={2}>{propertyDetail.address.line1}</Title2>
      <Text my={2} textStyle="Body2" colorScheme="gray" variant="colored">
        {propertySummary}
      </Text>
      {[
        propertyDetail.occupancyStatus,
        propertyDetail.isUnderRenovation ? 'Under renovation' : null,
      ]
        .filter((pillContents) => pillContents !== null)
        .map((pillContents, idx) => (
          <Caption1
            borderRadius="xl"
            display="inline-block"
            mr={2}
            py="0.375rem"
            px="0.75rem"
            layerStyle="card"
            whiteSpace="nowrap"
            key={idx}
          >
            {pillContents}
          </Caption1>
        ))}
    </Box>
  );
};
