import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { propertyData } from '../../lib/fakePropertyData';
import type { PropertyDataT } from '../../lib/fakePropertyData';
import { NavBar } from '../../components/navBar';
import { Center, Flex, Heading } from '@chakra-ui/react';
import theme from '../../theme';

// eslint-disable-next-line import/no-default-export
function Property() {
  const { address: uriAddress } = useParams<{ address: string }>();
  const property: PropertyDataT | undefined = propertyData.find(
    (property) => property.uriAddress === uriAddress,
  );
  console.log(uriAddress, JSON.stringify(property));

  return !property ? (
    <Fragment></Fragment>
  ) : (
    <Fragment>
      <NavBar />
      <Center>
        <Flex
          direction="column"
          align="center"
          w="100%"
          maxW={theme.breakpoints.sm}
          paddingX={[3, 4, 6]}
        >
          <Heading size="md" m={0} mt={2}>
            {property.name}
          </Heading>
        </Flex>
      </Center>
    </Fragment>
  );
}

export default Property;
