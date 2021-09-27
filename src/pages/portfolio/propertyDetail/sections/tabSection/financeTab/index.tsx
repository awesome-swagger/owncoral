import { Fragment, useContext, useEffect, useState } from 'react';
import type { PortfolioPropertyDetailInvestmentT } from '../../../../../../shared-fullstack/types';
import { Box, Center, Divider, HStack, Spinner, Text, useToast } from '@chakra-ui/react';
import { format as formatDate, parseISO } from 'date-fns';

import { Card } from '../../../../../../components';
import { Title2 } from '../../../../../../components/text';
import { fetchWrap } from '../../../../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../../../../lib/errorToastOptions';
import { formatFinancial } from '../../../../../../lib/financialFormatter';
import { useQuery } from '../../../../../../lib/useQuery';
import { UserContext } from '../../../../../../userContext';
import { InvestmentReturn } from '../../investmentReturn';

type FinanceTabPropsT = {
  propertyUriFragmentToId: { [uriFragment: string]: string } | null;
  adminSelectedUser: string | null;
};
const FinanceTab = ({ propertyUriFragmentToId, adminSelectedUser }: FinanceTabPropsT) => {
  const query = useQuery();
  const propertyUriFragment = query.get('property');
  const legalEntityId = query.get('entity');

  const propertyId: string | null =
    propertyUriFragmentToId !== null && propertyUriFragment !== null
      ? propertyUriFragmentToId[propertyUriFragment] || null
      : null;
  const [investment, setInvestment] = useState<PortfolioPropertyDetailInvestmentT | null>(null);
  const [user] = useContext(UserContext);
  const currentUserId = user?.id;

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
        if (rawJson.lastDistributionMonth) {
          rawJson.lastDistributionMonth = parseISO(rawJson.lastDistributionMonth);
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

  return investment !== null ? (
    <Box>
      <Title2 my={4}>Distributions</Title2>
      {investment.lastDistributionMonth !== null ? (
        <HStack alignItems="stretch" w="100%" spacing={3}>
          <Card
            title="Monthly"
            value={'$' + formatFinancial(investment.lastDistributionTotal)}
            description={
              investment.lastDistributionMonth
                ? formatDate(investment.lastDistributionMonth, 'MMM yyyy')
                : ''
            }
          />
          <Card
            title="Total"
            value={'$' + formatFinancial(investment.sumDistributionTotal)}
            description={
              <Fragment>
                ${formatFinancial(investment.sumDistributionRental)} rental
                <br />${formatFinancial(investment.sumDistributionSpecial)} special
              </Fragment>
            }
          />
        </HStack>
      ) : (
        <Center>Stay tuned, your first distributions are coming soon!</Center>
      )}
      <Divider my={4} />

      <InvestmentReturn investment={investment} />
      {/* <Divider my={4} /> */}
      {/* <ChartSection /> */}

      {/* TODO: Unhide once CharSection is shown */}
      {/* <Text my={4}>
        For illustration purposes only to demonstrate Coral&apos;s underwriting assumptions for this
        property. There is no guarantee that the projected returns or cash flows will be realized,
        and they may be significantly different than that shown here. See Disclosures tab for
        additional information.&copy;
      </Text> */}
    </Box>
  ) : (
    <Center h="100%" w="100%">
      <Spinner />
    </Center>
  );
};

// eslint-disable-next-line import/no-default-export
export default FinanceTab;
