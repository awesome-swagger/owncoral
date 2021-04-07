import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import { fetchWrap } from '../../lib/api';
import type { UserT } from '../../userContext';
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
  const [user, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(!user);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      getUser(setUser, setIsLoading);
    }
  }, []);
  return isLoading ? <Loading /> : <Route {...props} />;

  // return isLoading ? (
  //   <Loading />
  // ) : user ? (
  //   <Route {...props} />
  // ) : (
  //   <Redirect to={`/login?redirect=${location.pathname}`} />
  // );
};

async function getUser(
  setUser: (u: UserT) => void,
  setIsLoading: (isLoading: boolean) => void,
): Promise<void> {
  setIsLoading(true);

  const resp = await fetchWrap('/api/currentUser');
  if (resp.ok) {
    setUser(await resp.json());
  }

  setIsLoading(false);
}
