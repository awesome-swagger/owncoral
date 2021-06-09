import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import type { UserProfileT } from '../../shared-fullstack/types';

import { fetchWrap } from '../../lib/api';
import { UserContext } from '../../userContext';
import { Loading } from '../loading';

/**
 * Wraps a `<Route>` component, checking whether user is logged in first.
 * If not, user is redirected to the login page.
 *
 * Note that only one ProtectedRoute should render at a time (i.e. wrap it in a Switch), else
 * we will try to query for the current user multiple times.
 */
export const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const [user, setUser, locationHistory, setLocationHistory] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(!user);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      getUser(setUser, setIsLoading);
    }
  }, [setUser, user]);
  useEffect(() => setLocationHistory([...locationHistory, location.pathname]), []);

  return isLoading ? (
    <Loading />
  ) : user ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={
        location.pathname !== '/'
          ? `/login?redirect=${encodeURIComponent(location.pathname + location.search || '')}`
          : '/login'
      }
    />
  );
};

async function getUser(
  setUser: (u: UserProfileT) => void,
  setIsLoading: (isLoading: boolean) => void,
): Promise<void> {
  setIsLoading(true);

  const resp = await fetchWrap('/api/currentUser');

  if (resp === null) {
    setIsLoading(false);
    return;
  }

  if (resp.ok) {
    setUser(await resp.json());
  }

  setIsLoading(false);
}
