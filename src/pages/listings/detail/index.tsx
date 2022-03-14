import React, {
  Dispatch,
  Fragment,
  lazy,
  SetStateAction,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiFile, FiPercent, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import type {
  ListingsMutateInterestRequestParamsT,
  ListingsPropertyDetailT,
} from '../../../shared-fullstack/types';
import { PropertyStatus } from '../../../shared-fullstack/validators';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';

import Placeholder from '../../../assets/low-poly/low-poly-placeholder.png';
import { Container, DocumentsDrawer } from '../../../components';
import { Headline, Overline, Subhead, Title1, Title2 } from '../../../components/text';
import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST, DEFAULT_SUCCESS_TOAST } from '../../../lib/errorToastOptions';
import { fbqWrap } from '../../../lib/fbqWrap';
import { formatFinancial, formatFinancialSI } from '../../../lib/financialFormatter';
import { ListingsUrl } from '../../../lib/uriConstants';
import { useNavHeight } from '../../../lib/useNavHeight';
import { useQuery } from '../../../lib/useQuery';

const CoralPlanTab = lazy(() => import('./coralPlanTab'));
const DetailsTab = lazy(() => import('./detailsTab'));
const DisclosureTab = lazy(() => import('./disclosureTab'));
const PerformanceTab = lazy(() => import('./performanceTab'));
const NewsTab = lazy(() => import('./newsTab'));

const tabData = [
  { name: 'Performance', Component: PerformanceTab },
  { name: 'News', Component: NewsTab },
  { name: 'Property details', Component: DetailsTab },
  { name: 'Coral plan', Component: CoralPlanTab },
  { name: 'Disclosure', Component: DisclosureTab },
];

type ListingDetailPropsT = {
  listingUriFragmentToId: { [uriFragment: string]: string };
};
const ListingDetail = ({ listingUriFragmentToId }: ListingDetailPropsT) => {
  const query = useQuery();
  const portalRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const toast = useToast();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = useCallback(
    () => setDrawerIsOpen(!drawerIsOpen),
    [drawerIsOpen, setDrawerIsOpen],
  );
  const { footerHeight } = useNavHeight();

  const listingUriFragment = query.get('property');
  const propertyId: string | null = listingUriFragment
    ? listingUriFragmentToId[listingUriFragment] || null
    : null;

  const [listingsDetail, setListingsDetail] = useState<ListingsPropertyDetailT | null>(null);
  useEffect(() => {
    (async () => {
      if (propertyId === null) return;

      const resp = await fetchWrap('/api/listings-detail', {
        method: 'POST',
        body: JSON.stringify({
          propertyId,
        }),
      });

      fbqWrap('track', 'ViewContent', {
        content_name: listingsDetail?.name,
        content_ids: [listingsDetail?.id],
        content_type: 'product',
        content_category: 'LongTermHold',
      });

      if (resp === null) {
        return;
      }

      if (resp.ok) {
        setListingsDetail(await resp.json());
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load property listing',
          });
          break;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingUriFragmentToId, listingUriFragment, propertyId, toast]);

  return (
    // TODO: push spinners down to component level?
    // TODO: remove mdlEquity checks after cleaning up schema
    <Container pos="relative" p={0} ref={portalRef}>
      {listingUriFragmentToId !== null && listingsDetail !== null ? (
        <Fragment>
          <Portal containerRef={portalRef}>
            <Icon
              pos={{ base: 'fixed', md: 'absolute' }}
              top={5}
              left={5}
              h={8}
              w={8}
              p={2}
              as={FiX}
              cursor="pointer"
              onClick={() => history.push(ListingsUrl)}
              borderRadius="full"
              boxShadow="xs"
              layerStyle="iconColor"
              zIndex={2}
            />
            {listingsDetail.docsUrls.length > 0 && (
              <Button
                pos={{ base: 'fixed', md: 'absolute' }}
                top={5}
                right={5}
                h={8}
                p={2}
                leftIcon={<FiFile />}
                onClick={toggleDrawer}
                borderRadius="full"
                boxShadow="xs"
                layerStyle="iconColor"
                variant='outline'
                zIndex={2}
              >
                Docs
              </Button>
            )}
          </Portal>
          <AspectRatio ratio={4 / 3}>
            <Image
              borderTopRadius={{ base: 'none', md: '2xl' }}
              src={listingsDetail.splashImageUrl || Placeholder}
              alt={`${listingsDetail.name} Image`}
              w="100%"
              fallback={
                <Center>
                  <Spinner />
                </Center>
              }
            />
          </AspectRatio>
          <Box
            bg="inherit"
            borderRadius="2xl"
            pos="relative"
            bottom={6}
            pt={6}
            pb={{ base: 10, md: 0 }}
          >
            <Box px={6}>
              <TopSection listingsDetail={listingsDetail} />
              <Divider mt={6} />
            </Box>
            <TabSection listingsDetail={listingsDetail} />
            <Divider />
            <Box
              w="100%"
              px={6}
              py={3}
              pos={{ base: 'fixed', md: 'relative' }}
              bottom={{ base: footerHeight, md: 0 }}
              zIndex={2}
              bg="inherit"
            >
              {/* TODO: show secondary listing text based on whether property is closed
              <Flex alignItems="center" mb={2} ml={6}>
                <Icon opacity="0.5" as={FiInfo} mr={2} />
                <Text textStyle="Body2">This listing is full. Property closing in August 1</Text>
              </Flex>  */}
              <InterestButton
                listingsDetail={listingsDetail}
                setListingsDetail={setListingsDetail}
              />
            </Box>
          </Box>
          <DocumentsDrawer
            isOpen={drawerIsOpen}
            onToggle={toggleDrawer}
            documents={listingsDetail.docsUrls}
          />
        </Fragment>
      ) : (
        <Center w="100%" h={window.innerHeight}>
          <Spinner />
        </Center>
      )}
    </Container>
  );
};

type TopSectionPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
const TopSection = ({ listingsDetail }: TopSectionPropsT) => {
  const pctBg = useColorModeValue('primary.100', 'primary.200');

  const propertySummary = [
    listingsDetail.numUnits ? listingsDetail.numUnits + ' units' : null,
    listingsDetail.numBeds ? listingsDetail.numBeds + ' beds' : null,
    listingsDetail.numBaths ? listingsDetail.numBaths + ' baths' : null,
    listingsDetail.areaLiving
      ? Math.round(listingsDetail.areaLiving).toLocaleString() + ' ' + listingsDetail.areaUnits
      : null,
  ]
    .filter((s) => s !== null)
    .join('  ·  ');

  return (
    <Box>
      <Overline>
        {listingsDetail.address.cityLocality}, {listingsDetail.address.stateRegion}
      </Overline>
      <Box h={2} />
      <Title1>{listingsDetail.address.line1}</Title1>
      <Box h={2} />
      <Text textStyle="Body2" colorScheme="gray" variant="colored">
        {propertySummary}
      </Text>
      <Divider my={6} />
      {listingsDetail.mdlEquity !== null && (
        <HStack spacing={3}>
          <Center bgColor={pctBg} w={12} h={12} borderRadius="2xl">
            <Icon as={FiPercent} color="primary.500" w={5} h={5} />
          </Center>
          <VStack
            spacing={listingsDetail.status === PropertyStatus.enum.CLOSED ? 2 : 1}
            align="left"
          >
            <Subhead fontWeight="600">
              Share price
              {listingsDetail.status === PropertyStatus.enum.CLOSED ? ' for 1% ownership' : ''}
            </Subhead>
            {listingsDetail.status === PropertyStatus.enum.CLOSED ? (
              <Fragment>
                <Headline fontWeight="700">
                  Secondary: ${formatFinancial(Math.round(listingsDetail.mdlEquity * 0.01))}
                </Headline>
                <Headline fontWeight="500">
                  Original Price: ${formatFinancial(Math.round(listingsDetail.mdlEquity * 0.01))}
                </Headline>
              </Fragment>
            ) : (
              <Headline>
                ${formatFinancial(Math.round(listingsDetail.mdlEquity * 0.01))} for 1% ownership
              </Headline>
            )}
            {listingsDetail.mdlMortgage !== null && (
              <Text textStyle="Body2">
                Total Property Costs: $
                {formatFinancial(Math.round(listingsDetail.mdlEquity + listingsDetail.mdlMortgage))}
              </Text>
            )}
          </VStack>
        </HStack>
      )}
    </Box>
  );
};

type TabSectionPropsT = {
  listingsDetail: ListingsPropertyDetailT;
};
export const TabSection = ({ listingsDetail }: TabSectionPropsT) => {
  const fallback = (
    <Center>
      <Spinner />
    </Center>
  );

  return (
    <Tabs isLazy>
      <TabList mx={6}>
        {tabData.map(({ name }, idx) => (
          <Tab py={6} px={2} key={idx}>
            <Headline>{name}</Headline>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabData.map(({ Component }, idx) => (
          <TabPanel key={idx} px="0">
            <Suspense fallback={fallback}>
              <Component listingsDetail={listingsDetail} />
            </Suspense>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const Semibold: React.FC = ({ children }) => (
  <Text as="span" fontWeight="600" display="inline">
    {children}
  </Text>
);

type InterestButtonPropsT = {
  listingsDetail: ListingsPropertyDetailT;
  setListingsDetail: Dispatch<SetStateAction<ListingsPropertyDetailT | null>>;
};
const InterestButton = ({ listingsDetail, setListingsDetail }: InterestButtonPropsT) => {
  const DEFAULT_INTEREST_SHARES = 10;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [interestShares, setInterestShares] = useState(DEFAULT_INTEREST_SHARES);
  const toast = useToast();

  // If there's no interest, opens up modal
  // If there is interest, clears interest directly.
  const handleInterest = async () => {
    if (listingsDetail === null) return;

    if (!listingsDetail.hasInterest) {
      setInterestShares(DEFAULT_INTEREST_SHARES);
      onOpen();
      return;
    }

    handleInterestAmount(false);
  };

  // Updates server and notifies user
  const handleInterestAmount = async (newHasInterest: boolean) => {
    if (!listingsDetail.mdlEquity) return;

    const newInterestAmt =
      interestShares > 0 && newHasInterest
        ? Math.round((interestShares / 100) * listingsDetail.mdlEquity)
        : null;

    const listingsInterestParams: ListingsMutateInterestRequestParamsT = {
      interestAmt: newInterestAmt,
      hasInterest: newHasInterest,
      propertyId: listingsDetail.id,
    };

    const resp = await fetchWrap('/api/listings-interest', {
      method: 'POST',
      body: JSON.stringify(listingsInterestParams),
    });

    if (newHasInterest) {
      fbqWrap('track', 'AddToWishlist', {
        value: newInterestAmt,
        currency: 'USD',
        content_name: listingsDetail?.name,
        content_ids: [listingsDetail?.id],
        content_type: 'product',
        content_category: 'LongTermHold',
      });
    }

    if (resp === null) return;

    if (resp.ok) {
      // Success, update local state
      setListingsDetail({
        ...listingsDetail,
        hasInterest: newHasInterest,
        interestAmt: newInterestAmt,
      });

      // Display Snackbar
      toast({
        ...DEFAULT_SUCCESS_TOAST,
        description: newHasInterest
          ? "Thanks for your interest! We'll be reaching out soon"
          : "You're no longer interested, got it",
      });

      return;
    }

    switch (resp.status) {
      default:
        toast({
          ...DEFAULT_ERROR_TOAST,
          description: 'Unable to update your interest',
        });
        break;
    }
  };

  if (listingsDetail.mdlEquity === null) return null;

  return (
    <Fragment>
      <Button
        w="100%"
        py={3}
        whiteSpace="normal"
        onClick={handleInterest}
        variant={listingsDetail.hasInterest ? 'outline' : undefined}
      >
        {listingsDetail.hasInterest
          ? 'I’m no longer interested'
          : 'I’m interested in this property'}
      </Button>
      <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Title2>Your preferred investment size</Title2>
            </Center>
          </ModalHeader>
          <ModalBody>
            <Text textAlign="center">
              {interestShares === 0 ? (
                <i>I&apos;m not sure yet, please contact me</i>
              ) : interestShares === 25 ? (
                <Fragment>
                  <Semibold>{interestShares}</Semibold> shares for{' '}
                  <Semibold>
                    ${formatFinancialSI((interestShares * listingsDetail.mdlEquity) / 100)}
                  </Semibold>
                  , or more
                </Fragment>
              ) : (
                <Fragment>
                  <Semibold>{interestShares}</Semibold> share{interestShares > 1 ? 's' : ''} for $
                  <Semibold>
                    {formatFinancialSI((interestShares * listingsDetail.mdlEquity) / 100)}
                  </Semibold>
                </Fragment>
              )}
            </Text>
            <Center>
              <Slider
                min={0}
                max={25}
                mt={2}
                mb={6}
                step={1}
                w="85%"
                value={interestShares}
                onChange={setInterestShares}
                focusThumbOnChange={false}
              >
                <SliderTrack>
                  <Box position="relative" right={10} />
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Center>

            <Text textAlign="center">
              There&apos;s no commitment — just let us know what you think!
            </Text>

            <Box h={3} />
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                onClose();
                handleInterestAmount(true);
              }}
            >
              Submit
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default ListingDetail;
