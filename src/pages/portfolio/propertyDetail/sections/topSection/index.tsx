import { Fragment, useContext, useEffect, useState } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import type {
  PortfolioPropertyDetailT,
  PortfolioPropertyDetailInvestmentT,
} from '../../../../../shared-fullstack/types';
import {
  Box,
  Flex,
  Icon,
  Divider,
  Text,
  Center,
  Spinner,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { parseISO } from 'date-fns';

import { Subhead, Overline, Title2 } from '../../../../../components/text';
import { DEFAULT_ERROR_TOAST } from '../../../../../lib/errorToastOptions';
import { formatFinancial } from '../../../../../lib/financialFormatter';
import { useQuery } from '../../../../../lib/useQuery';
import { fetchWrap } from '../../../../../lib/api';
import { UserContext } from '../../../../../userContext';

type TopSectionPropsT = {
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
  propertyDetail: PortfolioPropertyDetailT;
};
export const TopSection = ({
  propertyDetail,
  propertyUriFragmentToId,
  adminSelectedUser,
}: TopSectionPropsT) => {
  const [investment, setInvestment] = useState<PortfolioPropertyDetailInvestmentT | null>(null);
  const [user] = useContext(UserContext);
  const currentUserId = user?.id;

  const query = useQuery();
  const propertyUriFragment = query.get('property');
  const legalEntityId = query.get('entity');
  const propertyId: string | null =
    propertyUriFragmentToId !== null && propertyUriFragment !== null
      ? propertyUriFragmentToId[propertyUriFragment] || null
      : null;

  const propertySummary = [
    propertyDetail.numUnits ? propertyDetail.numUnits + ' units' : null,
    propertyDetail.numBeds ? propertyDetail.numBeds + ' beds' : null,
    propertyDetail.numBaths ? propertyDetail.numBaths + ' baths' : null,
    propertyDetail.areaLiving
      ? Math.round(propertyDetail.areaLiving).toLocaleString() + ' ' + propertyDetail.areaUnits
      : null,
  ]
    .filter((s) => s !== null)
    .join('  ·  ');

  const toast = useToast();

  useEffect(() => {
    (async () => {
      if (propertyId === null || legalEntityId === null) {
        return;
      }

      const requestOptions = {
        propertyId,
        legalEntityId,
      };
      if (user?.isAdmin) {
        Object.assign(requestOptions, { impersonatedUserId: adminSelectedUser || currentUserId });
      }

      const resp = await fetchWrap('/api/portfolio-property-detail/finance', {
        method: 'POST',
        body: JSON.stringify(requestOptions),
      });

      if (resp === null) {
        return;
      }

      if (resp.ok) {
        const rawJson = await resp.json();
        if (rawJson.lastDistributionInitiatedAt) {
          rawJson.lastDistributionInitiatedAt = parseISO(rawJson.lastDistributionInitiatedAt);
        }
        setInvestment(rawJson);
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load investment',
          });
          break;
      }
    })();
  }, [
    adminSelectedUser,
    currentUserId,
    propertyUriFragmentToId,
    propertyUriFragment,
    legalEntityId,
    propertyId,
    toast,
    user,
  ]);

  return (
    <Box>
      <Overline>
        {propertyDetail.address.cityLocality}, {propertyDetail.address.stateRegion}
      </Overline>
      <Title2 my={3}>{propertyDetail.address.line1}</Title2>
      <Text my={2} textStyle="Body2" colorScheme="gray" variant="colored">
        {propertySummary}
      </Text>
      <HStack flexWrap="wrap" gridGap={2} spacing={0}>
        {[
          propertyDetail.occupancyStatus,
          propertyDetail.isUnderRenovation ? 'Under renovation' : null,
        ]
          .filter((pillContents) => pillContents !== null)
          .map((pillContents, idx) => (
            <Subhead
              borderRadius="full"
              py="0.375rem"
              px="0.75rem"
              layerStyle="card"
              whiteSpace="nowrap"
              key={idx}
            >
              {pillContents}
            </Subhead>
          ))}
      </HStack>
      <Divider my={4} />

      {investment !== null ? (
        investment?.currentEquity !== null &&
        investment?.currentOwnershipPct !== null && (
          <Fragment>
            <Flex alignItems="center">
              <Box borderRadius="2xl" p={2} mr={2} layerStyle="card">
                <Icon as={AiOutlineDollar} h={6} w={6} />
              </Box>
              <Text marginY={4}>
                You invested ${formatFinancial(investment?.currentEquity)} for{' '}
                {investment?.currentOwnershipPct === 1.0
                  ? '100'
                  : (investment?.currentOwnershipPct * 100.0).toPrecision(2).toString()}
                % ownership
              </Text>
            </Flex>
            <Divider mt={4} />
          </Fragment>
        )
      ) : (
        <Center h="100%" w="100%">
          <Spinner />
        </Center>
      )}
    </Box>
  );
};
