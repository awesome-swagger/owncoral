import { FiMapPin } from 'react-icons/fi';
import type { ListingsPropertyT } from '../../shared-fullstack/types';
import { PropertyStatus } from '../../shared-fullstack/validators';
import {
  Box,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';

import { NAVBAR_TOP_BREAKPOINT } from '../../components/navBar';
import { Overline, Subhead, Title1, Title2 } from '../../components/text';
import { formatFinancial } from '../../lib/financialFormatter';
import { useNavHeight } from '../../lib/useNavHeight';

type ListingCardPropsT = {
  listing: ListingsPropertyT;
  onSlideClick: (x: ListingsPropertyT) => void;
};
export const ListingCard = ({ listing, onSlideClick }: ListingCardPropsT) => {
  const [isTouch] = useMediaQuery('(pointer: coarse)');
  const { headerHeight, footerHeight, extraHeight } = useNavHeight();
  const isLightMode = useColorModeValue(true, false);
  const background = isLightMode
    ? 'linear-gradient(0deg, rgb(129, 133, 146) 0%, rgb(174, 176, 182) ' +
      '25%, rgb(208, 199, 197) 40%, rgb(228, 219, 217) ' +
      '50%, rgb(208, 199, 197) 60%, rgb(174, 176, 182)  ' +
      '75%, rgb(129, 133, 146) 100%)'
    : 'whiteAlpha.200';
  const priorListingGrayscaleFilter =
    listing.status === PropertyStatus.enum.CLOSED ? 'grayscale(1)' : undefined;

  if (!listing.cardImageUrl) return null;

  return (
    <Box
      w="100%"
      pos="relative"
      h={{
        base: `calc(${window.innerHeight}px - ${headerHeight} - ${footerHeight} - ${extraHeight} - 6.5rem)`,
        [NAVBAR_TOP_BREAKPOINT]: `calc(${window.innerHeight}px - ${headerHeight} - 8rem)`,
      }}
      maxHeight={{ base: 'unset', [NAVBAR_TOP_BREAKPOINT]: '550px' }}
      boxShadow="sm"
      borderRadius="3xl"
      _hover={
        isLightMode
          ? { filter: `saturate(1.35) contrast(1.1)` }
          : {
              filter: `saturate(1.35) contrast(1.1) brightness(1.1)`,
              bgColor: 'whiteAlpha.300',
            }
      }
      _active={isTouch ? {} : { transform: 'translateY(1px) translateX(0.5px)' }}
      transition="all 200ms"
      color="white"
      cursor="pointer"
      onClick={() => onSlideClick(listing)}
      background={background}
      overflow="hidden"
    >
      {listing.status === PropertyStatus.enum.CLOSED && <ClosedDealLabel />}
      <Box w="100%" h="100%" filter={priorListingGrayscaleFilter}>
        <Box pos="absolute" top={0} left={0} w="100%" px={5} py={6}>
          <Flex justify="space-between" align="baseline">
            <Title1>{listing.name}</Title1>
            {listing.status !== PropertyStatus.enum.CLOSED && listing.mdlEquity !== null && (
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
            {listing.status !== PropertyStatus.enum.CLOSED && listing.mdlEquity !== null && (
              <Subhead>price per share</Subhead>
            )}
          </Flex>
        </Box>

        {/* TODO: Remove IRR and distribution checks after cleaning up data */}
        <VStack
          pos="absolute"
          bottom={0}
          left={0}
          w="100%"
          px={5}
          py={8}
          align="stretch"
          spacing={2}
        >
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
        {/* <Center pos="relative" mt={10}>
        <Button top={-16} pos="absolute" border="3px solid" borderColor="white" h={12} w={12}>
          <Icon h={6} w={6} as={FiMapPin} />
        </Button>
      </Center> */}
      </Box>
    </Box>
  );
};

// Reference: https://www.figma.com/file/Tsxb6xTQkoLz2bQMN3FQNH/Coral---UI-Design?node-id=3381%3A16817
const ClosedDealLabel = () => (
  <Flex
    pos="absolute"
    right="-4.17em"
    top="3.3em"
    transform="rotate(45deg)"
    align="center"
    justifyContent="center"
    background="white"
    w="16.67em"
    h="2em"
  >
    <Overline color="primary.500">Closed Deal</Overline>
  </Flex>
);
