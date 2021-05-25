import { Box, Heading, Text } from '@chakra-ui/react';
import type { PortfolioPropertyDetailT } from '../../../../../shared-fullstack/types';
import { H5, Overline } from '../../../../../components/text';
import Image from '../../../../../assets/2_hingham.jpg';

type TopSectionPropsT = {
  propertyDetail: PortfolioPropertyDetailT;
};
export const TopSection = ({ propertyDetail }: TopSectionPropsT) => {
  const sliderImages = [Image, Image, Image];
  return (
    <Box mt={6}>
      <Overline>
        {propertyDetail.address.cityLocality}, {propertyDetail.address.stateRegion}
      </Overline>
      <H5>{propertyDetail.address.line1}</H5>
      <Text textStyle="subTitle1">
        {propertyDetail.numUnits ? propertyDetail.numUnits + ' units' : 'N/A'} ·{' '}
        {propertyDetail.areaTotal
          ? propertyDetail.areaTotal.toFixed(0).toLocaleString() + ' ' + propertyDetail.areaUnits
          : 'N/A'}
      </Text>
      <ImgSlider images={sliderImages} />
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
