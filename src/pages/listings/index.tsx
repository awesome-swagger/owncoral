import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Switch, useHistory, useRouteMatch } from 'react-router-dom';
import type { ListingsPropertyT } from '../../shared-fullstack/types';
import { Box, Center, Spinner, useToast } from '@chakra-ui/react';
import { Container, NavBar, ProtectedRoute, ListingCard } from '../../components';
import { NAVBAR_TOP_BREAKPOINT } from '../../components/navBar';
import { Title2 } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import { useNavHeight } from '../../lib/useNavHeight';
import { DEFAULT_ERROR_TOAST } from '../../lib/errorToastOptions';
import { addressToUrlFragment } from '../../lib/urlFragments';
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
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: true });
  const { headerHeight, footerHeight, extraHeight } = useNavHeight();

  const onSlideClick = useCallback(
    (listing) => {
      if (emblaApi && emblaApi.clickAllowed())
        history.push(listingsRootUrl + '/detail?property=' + addressToUrlFragment(listing.address));
    },
    [emblaApi],
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <Container
      px="0"
      overflow="visible"
      showColorModeButton={false}
      h={{
        base: `calc(${window.innerHeight}px - ${headerHeight} - ${footerHeight} - ${extraHeight})`,
        [NAVBAR_TOP_BREAKPOINT]: 'auto',
      }}
      minH="0"
    >
      <Box userSelect="none">
        <Title2 px={6} mb={6}>
          Listings / Greater Boston Area
        </Title2>
        {listings === null ? (
          <Center h="100%" minH="70vh">
            <Spinner />
          </Center>
        ) : (
          <Box className="embla" ref={emblaRef}>
            <Box className="embla__viewport" ref={viewportRef}>
              <Box className="embla__container" pb={6}>
                {listings.map((listing, idx) => (
                  <Box className="embla__slide" minW="85%" mx={2} key={idx}>
                    <Box className="embla__slide__inner" overflow="visible">
                      <ListingCard listing={listing} onSlideClick={onSlideClick} key={idx} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Listings;
