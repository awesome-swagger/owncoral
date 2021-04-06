import { Box, Divider } from '@chakra-ui/react';
import { PropertyLocation } from './PropertyLocation';
import { PropertyDetail } from './PropertyDetail';
import { ValueAddPlane } from './ValueAddPlane';
import { Financing } from './Financing';

export const TabPanel2 = ({ data }: { data: any }) => (
  <Box>
    <PropertyLocation data={data} />
    <Divider my={8} />
    <PropertyDetail data={data} />
    <Divider my={8} />
    <ValueAddPlane data={data} />
    <Divider my={8} />
    <Financing data={data} />
  </Box>
);
