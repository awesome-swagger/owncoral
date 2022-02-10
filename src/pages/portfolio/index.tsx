import React, { Fragment, lazy, useContext, useEffect, useState } from 'react';
import { Redirect,Switch, useRouteMatch } from 'react-router-dom';
import type { AdminPanelUserInfoT, PortfolioDashboardPropertyT } from '../../shared-fullstack/types';
import { useToast } from '@chakra-ui/react';
import { parseISO } from 'date-fns';

import { ProtectedRoute } from '../../components';
import { fetchWrap } from '../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../lib/errorToastOptions';
import { addressToUrlFragment } from '../../lib/urlFragments';
import { UserContext } from '../../userContext';
import Error404 from '../error404';
import AdminPanel from './AdminPanel';
import PortfolioDashboard from './dashboard';

const PortfolioMap = lazy(() => import('./map'));
const PortfolioPropertyDetail = lazy(() => import('./propertyDetail'));

const Portfolio = () => {
  const { url: portfolioRootUrl } = useRouteMatch();
  const [adminPanelUserInfo, setAdminPanelUserInfo] = useState<AdminPanelUserInfoT[] | null>(null);
  const [user, setUser] = useContext(UserContext);
  const currentUserId = user?.id;
  const [loggedOut, setLoggedOut] = useState<boolean>(false);

  const [adminSelectedUser, setAdminSelectedUser] = useState<string | null>(
    // TODO: remove this dev hack
    import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development'
      ? '6bb57093-39b5-4bc2-a2f0-42502a5a2688' // Ben Lin
      : user?.id || null,
  );
  const [properties, setProperties] = useState<PortfolioDashboardPropertyT[] | null>(null);

  // Routes for property details page, based on the property address
  let propertyUriFragmentToId: { [uriFragment: string]: string } | null = null;

  if (properties !== null) {
    propertyUriFragmentToId = {};
    properties.forEach((property) => {
      // FYI: redundant type guard
      if (propertyUriFragmentToId) {
        propertyUriFragmentToId[addressToUrlFragment(property.address)] = property.propertyId;
      }
    });
  }

  const toast = useToast();

  useEffect(() => {
    (async () => {
      if (!user || !user.isAdmin) return;

      const resp = await fetchWrap('/api/fetchAllUsers', { method: 'GET' });

      if (resp === null) {
        return;
      }

      if (resp.ok) {
        setAdminPanelUserInfo(await resp.json());
        return;
      }

      switch (resp.status) {
        case 401:
          setLoggedOut(true);
          break;
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load admin dashboard',
          });
          break;
      }
    })();
  }, [toast, user]);

  useEffect(() => {
    (async () => {
      setProperties(null);
      const requestOptions = user?.isAdmin
        ? {
            impersonatedUserId: adminSelectedUser || currentUserId,
          }
        : {};
      const resp = await fetchWrap('/api/portfolio-dashboard', {
        method: 'POST',
        body: JSON.stringify(requestOptions),
      });

      if (resp === null) {
        return;
      }

      if (resp.ok) {
        const portfolio = await resp.json();

        // Parse date-string back into date object on each property
        for (const property of portfolio) {
          if (property.lastDistributionMonth) {
            property.lastDistributionMonth = parseISO(property.lastDistributionMonth);
          }
        }

        setProperties(portfolio);
        return;
      }

      switch (resp.status) {
        case 401:
          setLoggedOut(true);
          break;
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            ...{
              description: 'Unable to load portfolio',
            },
          });
          break;
      }
    })();
  }, [adminSelectedUser, currentUserId, toast, user]);

  // Redirects logged out users to the logged in page
  // TODO: wrap this in a useLogout hook
  if (loggedOut) {
    window.location.assign("/login?flash=You've logged out");
  }

  return (
    <Fragment>
      {user?.isAdmin && (
        <AdminPanel
          isLoading={adminPanelUserInfo === null}
          selectedUser={adminSelectedUser}
          setSelectedUser={setAdminSelectedUser}
          userList={adminPanelUserInfo}
        />
      )}
      <Switch>
        <ProtectedRoute exact path={portfolioRootUrl}>
          <PortfolioDashboard properties={properties} portfolioRootUrl={portfolioRootUrl} />
        </ProtectedRoute>
        <ProtectedRoute exact path={portfolioRootUrl + '/map'} component={PortfolioMap} />
        {/* 404 for invalid property URIs */}
        <ProtectedRoute path={portfolioRootUrl + '/investment'}>
          <PortfolioPropertyDetail
            propertyUriFragmentToId={propertyUriFragmentToId}
            adminSelectedUser={adminSelectedUser}
          />
        </ProtectedRoute>
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Portfolio;
