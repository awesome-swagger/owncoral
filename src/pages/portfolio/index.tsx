import React, { Fragment, lazy, useContext, useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import type { AdminPanelUserInfoT } from '../../shared-fullstack/validators';
import { useToast } from '@chakra-ui/react';

import { NavBar, ProtectedRoute } from '../../components';
import { fetchWrap } from '../../lib/api';
import { DEFAULT_ERROR_TOAST } from '../../lib/errorToastOptions';
import { UserContext } from '../../userContext';
import Error404 from '../error404';
import AdminPanel from './AdminPanel';
import PortfolioDashboard from './dashboard';

const PortfolioMap = lazy(() => import('./map'));
const PortfolioPropertyDetail = lazy(() => import('./propertyDetail'));

const Portfolio = () => {
  const { url: portfolioRootUrl } = useRouteMatch();
  const [adminPanelUserInfo, setAdminPanelUserInfo] = useState<AdminPanelUserInfoT[] | null>(null);
  const [user] = useContext(UserContext);
  const [adminSelectedUser, setAdminSelectedUser] = useState<string | null>(user?.id || null);
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const resp = await fetchWrap('/api/fetchAllUsers', { method: 'GET' });

      if (resp.ok) {
        setAdminPanelUserInfo(await resp.json());
        return;
      }

      switch (resp.status) {
        default:
          toast({
            ...DEFAULT_ERROR_TOAST,
            description: 'Unable to load admin dashboard',
          });
          break;
      }
    })();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <AdminPanel
        isLoading={adminPanelUserInfo === null}
        selectedUser={adminSelectedUser}
        setSelectedUser={setAdminSelectedUser}
        userList={adminPanelUserInfo}
      />
      <Switch>
        <ProtectedRoute exact path={portfolioRootUrl}>
          <PortfolioDashboard
            adminSelectedUser={adminSelectedUser}
            portfolioRootUrl={portfolioRootUrl}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path={portfolioRootUrl + '/map'} component={PortfolioMap} />
        <ProtectedRoute
          exact
          path={portfolioRootUrl + '/property-detail'}
          component={PortfolioPropertyDetail}
        />
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default Portfolio;
