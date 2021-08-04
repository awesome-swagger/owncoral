import React, { Fragment, useEffect, useState } from 'react';
import { Switch, useHistory, useRouteMatch } from 'react-router-dom';
import type { ListingsPropertyT } from '@app/shared-fullstack/types';
import {
  Box,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
  useColorModeValue,
  useMediaQuery,
  useToast,
  VStack,
} from '@chakra-ui/react';

import { Container, NavBar, ProtectedRoute } from '../../components';
import { NAVBAR_TOP_BREAKPOINT } from '../../components/navBar';
import { Overline, Subhead, Title1, Title2 } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../lib/errorToastOptions';
import { formatFinancial } from '../../lib/financialFormatter';
import { addressToUrlFragment } from '../../lib/urlFragments';
import { useNavHeight } from '../../lib/useNavHeight';
import Error404 from '../error404';
import ListingDetail from './detail';

const Listings = () => {
  const { url: listingsRootUrl } = useRouteMatch();
  const [listings, setListings] = useState<ListingsPropertyT[] | null>(null);
  const toast = useToast();

  // Routes for property details page, based on the property address
  let listingUriFragmentToId: { [uriFragment: string]: string } = {};
  if (listings !== null) {
    listings.forEach((listing) => {
      listingUriFragmentToId[addressToUrlFragment(listing.address)] = listing.propertyId;
    });
  }

  useEffect(() => {
    (async () => {
      setListings(null);

      const resp = await fetchWrap('/api/listings', { method: 'POST' });

      if (resp === null) return;

      if (resp.ok) {
        setListings(await resp.json());
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load listings',
          });
          break;
      }
    })();
  }, [toast]);

  return (
    <Fragment>
      <NavBar />
      <Switch>
        <ProtectedRoute exact path={listingsRootUrl}>
          <ListingsMain listings={listings} listingsRootUrl={listingsRootUrl} />
        </ProtectedRoute>

        <ProtectedRoute path={listingsRootUrl + '/detail'}>
          <ListingDetail listingUriFragmentToId={listingUriFragmentToId} />
        </ProtectedRoute>
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </Fragment>
  );
};

type ListingsMainPropsT = {
  listings: ListingsPropertyT[] | null;
  listingsRootUrl: string;
};
const ListingsMain = ({ listings, listingsRootUrl }: ListingsMainPropsT) => {
  const history = useHistory();

  return (
    <Container showColorModeButton={false}>
      <Box userSelect="none">
        <Title2 mb={6}>Listings / Greater Boston Area</Title2>
        {listings === null ? (
          <Center h="100%" minH="50vh">
            <Spinner />
          </Center>
        ) : (
          <VStack spacing={12}>
            {listings.map((listing, idx) => (
              <ListingCard
                listing={listing}
                history={history}
                listingRootUrl={listingsRootUrl}
                key={idx}
              />
            ))}
          </VStack>
        )}
      </Box>
    </Container>
  );
};

type ListingCardPropsT = {
  listing: ListingsPropertyT;
  history: ReturnType<typeof useHistory>;
  listingRootUrl: string;
};
const ListingCard = ({ listing, history, listingRootUrl }: ListingCardPropsT) => {
  const [isTouch] = useMediaQuery('(pointer: coarse)');
  const { headerHeight, footerHeight, extraHeight } = useNavHeight();
  const isLightMode = useColorModeValue(true, false);
  const background = isLightMode
    ? 'linear-gradient(0deg, rgb(129, 133, 146) 0%, rgb(174, 176, 182) ' +
      '25%, rgb(208, 199, 197) 40%, rgb(228, 219, 217) ' +
      '50%, rgb(208, 199, 197) 60%, rgb(174, 176, 182)  ' +
      '75%, rgb(129, 133, 146) 100%)'
    : 'whiteAlpha.200';

  return listing.cardImageUrl ? (
    <Box
      w="100%"
      pos="relative"
      h={{
        base: `calc(${window.innerHeight}px - ${headerHeight} - ${footerHeight} - ${extraHeight} - 6rem)`,
        [NAVBAR_TOP_BREAKPOINT]: `calc(${window.innerHeight}px - ${headerHeight} - 8rem)`,
      }}
      maxHeight={{ base: 'unset', [NAVBAR_TOP_BREAKPOINT]: '550px' }}
      boxShadow="sm"
      borderRadius="3xl"
      _hover={
        isLightMode
          ? { filter: 'saturate(1.35) contrast(1.1)' }
          : { filter: 'saturate(1.35) contrast(1.1) brightness(1.1)', bgColor: 'whiteAlpha.300' }
      }
      _active={isTouch ? {} : { transform: 'translateY(1px) translateX(0.5px)' }}
      transition="all 200ms"
      color="white"
      cursor="pointer"
      onClick={() =>
        history.push(listingRootUrl + '/detail?property=' + addressToUrlFragment(listing.address))
      }
      background={background}
    >
      <Box pos="absolute" top={0} left={0} w="100%" px={5} py={6}>
        <Flex justify="space-between" align="baseline">
          <Title1>{listing.name}</Title1>
          {listing.mdlEquity !== null && (
            <Text>${formatFinancial(Math.round(listing.mdlEquity * 0.01))}</Text>
          )}
        </Flex>
        <Flex justify="space-between" align="baseline">
          <Subhead>
            {[
              `${listing.numUnits} units`,
              listing.areaLiving !== null
                ? `${listing.areaLiving.toLocaleString()} ${listing.areaUnits}`
                : null,
            ]
              .filter((tag) => tag !== null)
              .join(' · ')}
          </Subhead>
          {listing.mdlEquity !== null && <Subhead>price per share</Subhead>}
        </Flex>
      </Box>

      {/* TODO: Remove IRR and distribution checks after cleaning up data */}
      <VStack pos="absolute" bottom={0} left={0} w="100%" px={5} py={8} align="stretch" spacing={2}>
        <Flex justify="space-between" align="baseline">
          <Overline sx={{ color: 'inherit' }}>
            {listing.listingCashDist !== null ? 'Target cash distribution' : ''}
          </Overline>

          <Overline sx={{ color: 'inherit' }}>
            {listing.listingIrr !== null ? 'Target IRR' : ''}
          </Overline>
        </Flex>
        <Flex justify="space-between" align="baseline">
          <Title2>
            {listing.listingCashDist !== null
              ? Math.round(listing.listingCashDist * 100) + '%'
              : ''}
          </Title2>
          <Title2>
            {listing.listingIrr !== null
              ? `${Math.round(listing.listingIrr * 100) - 1}-${
                  Math.round(listing.listingIrr * 100) + 1
                }%`
              : ''}
          </Title2>
        </Flex>
      </VStack>

      <Image
        src={listing.cardImageUrl}
        h="100%"
        w="100%"
        objectFit="cover"
        borderRadius="3xl"
        fallback={
          <Center h="100%">
            <Spinner />
          </Center>
        }
      />
    </Box>
  ) : null;
};

// eslint-disable-next-line import/no-default-export
export default Listings;
