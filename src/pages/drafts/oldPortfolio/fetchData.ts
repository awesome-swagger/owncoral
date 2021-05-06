import type { Dispatch, SetStateAction } from 'react';
import type { AdminPanelUserInfoT } from '../../../shared-fullstack/types';
import type { useToast } from '@chakra-ui/react';

import { fetchWrap } from '../../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../../lib/errorToastOptions';

// TODO: use shared types with backend
export type PropertyDataT = {
  name: string;
  cityLocality: string;
  stateRegion: string;
  uriAddress: string;
  initialInvestment: number;
  monthlyDistribution: number;
  totalDistribution: number;
  totalContribution: number;

  contribution: number;
  contributionDate: Date;
  distributionTotalActual: number;
  distributionTotalPlanned: number;
  distributionLastActual: number;
  distributionLastPlanned: number;
  distributionLastDate: Date;
  markedValueActual: number;
  markedValuePlanned: number;
};

export const fetchPortfolio = async ({
  selectedUser,
  setPortfolio,
  setIsLoading,
  toast,
}: {
  selectedUser: string | null;
  toast: ReturnType<typeof useToast>;
  setPortfolio: Dispatch<SetStateAction<PropertyDataT[] | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  setIsLoading(true);
  const resp = await fetchWrap('/api/old-portfolio', {
    method: 'POST',
    body: JSON.stringify({ selectedUser }),
  });
  setIsLoading(false);

  if (resp === null) {
    return;
  }

  if (resp.ok) {
    const portfolio = await resp.json();
    setPortfolio(portfolio);
    return;
  }

  switch (resp.status) {
    default:
      toast({
        ...DEFAULT_ERROR_TOAST,
        ...{
          description: 'Unable to load portfolio',
        },
      });
      break;
  }
};

export const fetchAllUsersAdmin = async ({
  setIsAdminLoading,
  setAdminUserList,
  toast,
}: {
  setIsAdminLoading: Dispatch<SetStateAction<boolean>>;
  setAdminUserList: Dispatch<SetStateAction<AdminPanelUserInfoT[] | null>>;
  toast: ReturnType<typeof useToast>;
}) => {
  setIsAdminLoading(true);
  const resp = await fetchWrap('/api/fetchAllUsers', { method: 'GET' });
  setIsAdminLoading(false);

  if (resp === null) {
    return;
  }

  if (resp.ok) {
    setAdminUserList(await resp.json());
    return;
  }

  switch (resp.status) {
    default:
      toast({
        ...DEFAULT_ERROR_TOAST,
        ...{
          description: 'Unable to load admin dashboard',
        },
      });
      break;
  }
};
