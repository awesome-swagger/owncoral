import { useCallback, useContext,useEffect, useState } from 'react';
import { FiChevronLeft, FiInfo } from 'react-icons/fi';
import { Redirect,Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import type { ListingsPropertyT } from '../../shared-fullstack/types';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Spinner,
  useBreakpointValue,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import useEmblaCarousel from 'embla-carousel-react';

import { Container, ListingCard } from '../../components';
import { NAVBAR_TOP_BREAKPOINT } from '../../components/navBar/constants';
import { Title2 } from '../../components/text';
import { fetchWrap } from '../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../lib/errorToastOptions';
import { MarketUrl } from '../../lib/uriConstants';
import { addressToUrlFragment } from '../../lib/urlFragments';
import { useNavHeight } from '../../lib/useNavHeight';
import { UserContext } from '../../userContext';
import Error404 from '../error404';
import ListingDetail from './detail';

const Listings = () => {
  const { url: listingsRootUrl } = useRouteMatch();
  const [listings, setListings] = useState<ListingsPropertyT[] | null>(null);
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  const toast = useToast();
  const [_, setUser] = useContext(UserContext);

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
        case 401:
          setLoggedOut(true);
          break;
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load listings',
          });
          break;
      }
    })();
  }, [toast]);

  // Redirects logged out users to the logged in page
  // TODO: wrap this in a useLogout hook
  if (loggedOut) {
    window.location.assign("/login?flash=You've logged out");
  }

  return (
    <Switch>
      <Route exact path={listingsRootUrl}>
        <ListingsMain listings={listings} listingsRootUrl={listingsRootUrl} />
      </Route>

      <Route path={listingsRootUrl + '/detail'}>
        <ListingDetail listingUriFragmentToId={listingUriFragmentToId} />
      </Route>

      <Route path="*" component={Error404} />
    </Switch>
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
  const [isTouch] = useMediaQuery('(pointer: coarse)');
  const isBelowNavBreakpoint = useBreakpointValue({ base: true, [NAVBAR_TOP_BREAKPOINT]: false });
  const useSlider = isTouch && isBelowNavBreakpoint;

  const onSlideClick = useCallback(
    (listing) => {
      if (!useSlider || emblaApi?.clickAllowed())
        history.push(listingsRootUrl + '/detail?property=' + addressToUrlFragment(listing.address));
    },
    [useSlider, emblaApi, history, listingsRootUrl],
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
    <Container px={0} pb={0}>
      <Box userSelect="none">
        <Flex px={6} mb={6} alignItems="center" justifyContent="space-between">
          <Button
            borderRadius="full"
            colorScheme="white"
            w={10}
            h={10}
            onClick={() => history.goBack()}
          >
            <Icon as={FiChevronLeft} />
          </Button>
          <Title2>Greater Boston Area</Title2>
          <Button
            borderRadius="full"
            colorScheme="white"
            w={10}
            h={10}
            onClick={() => history.push(MarketUrl + '/boston')}
          >
            <Icon as={FiInfo} />
          </Button>
        </Flex>
        {listings === null ? (
          <Center h="100%" minH="70vh">
            <Spinner />
          </Center>
        ) : (
          <Box aria-label="listings">
            {useSlider ? (
              <Box className="embla" ref={emblaRef}>
                <Box className="embla__viewport" ref={viewportRef}>
                  <Box className="embla__container" pb={6}>
                    {listings.map((listing, idx) => (
                      <Box
                        aria-label="listing"
                        className="embla__slide"
                        minW="85%"
                        padding="0"
                        mx="2%"
                        key={idx}
                      >
                        <Box className="embla__slide__inner" overflow="visible">
                          <ListingCard
                            listing={listing}
                            onSlideClick={onSlideClick}
                            useSlider={useSlider}
                            key={idx}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ) : (
              listings.map((listing, idx) => (
                <Box aria-label="listing" key={idx} px={6} pb={8}>
                  <ListingCard
                    listing={listing}
                    onSlideClick={onSlideClick}
                    useSlider={useSlider}
                  />
                </Box>
              ))
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Listings;
