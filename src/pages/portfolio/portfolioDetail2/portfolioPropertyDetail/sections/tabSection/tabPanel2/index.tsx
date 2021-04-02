import { Box, Divider } from '@chakra-ui/react';
import { PropertyLocation } from './PropertyLocation';
import { PropertyDetail } from './PropertyDetail';
import { ValueAddPlane } from './ValueAddPlane';
import { Financing } from './Financing';

export const TabPanel2 = () => (
  <Box>
    <PropertyLocation />
    <Divider my={8} />
    <PropertyDetail />
    <Divider my={8} />
    <ValueAddPlane />
    <Divider my={8} />
    <Financing />
  </Box>
);
