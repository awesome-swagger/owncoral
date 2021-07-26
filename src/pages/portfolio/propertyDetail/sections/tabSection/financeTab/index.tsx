import { Fragment, useContext, useEffect, useState } from 'react';
import type {
  PortfolioPropertyDetailInvestmentT,
  PortfolioPropertyDetailT,
} from '../../../../../../shared-fullstack/types';
import { Box, Center, Divider, Flex, Icon, Spinner, Text, useToast } from '@chakra-ui/react';
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
  propertyDetail: PortfolioPropertyDetailT;
};
const FinanceTab = ({
  propertyDetail,
  propertyUriFragmentToId,
  adminSelectedUser,
}: FinanceTabPropsT) => {
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

  return investment !== null ? (
    <Box>
      <Title2 my={4}>Distributions</Title2>
      {investment.lastDistributionInitiatedAt !== null ? (
        <Flex overflow="auto">
          <Card
            title="Monthly"
            value={'$' + formatFinancial(investment.lastDistributionTotal)}
            description={
              investment.lastDistributionInitiatedAt
                ? formatDate(investment.lastDistributionInitiatedAt, 'MMM yyyy')
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
        </Flex>
      ) : (
        <Center>Stay tuned, your first distributions are coming soon!</Center>
      )}
      <Divider my={4} />

      <InvestmentReturn investment={investment} />
      {/* <Divider my={4} /> */}
      {/* <ChartSection /> */}
    </Box>
  ) : (
    <Center h="100%" w="100%">
      <Spinner />
    </Center>
  );
};

// eslint-disable-next-line import/no-default-export
export default FinanceTab;
