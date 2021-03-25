import React, { useContext, useEffect, useState } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom';

import { fetchWrap } from '../../lib/api';
import type { UserT } from '../../userContext';
import { UserContext } from '../../userContext';
import { Loading } from '../loading';

/**
 * Wraps a `<Route>` component, checking whether user is logged in first.
 * If not, user is redirected to the login page.
 */
export const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const [user, setUser] = useContext<UserT>(UserContext);
  // const [isLoading, setIsLoading] = useState<boolean>(!user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!user) {
      getUser(setUser, setIsLoading);
    }
  }, []);

  return (
    // isLoading is {isLoading ? 'true' : 'false'}
    // user is {JSON.stringify(user)}
    // isLoading ? <Loading /> : user ? <Route {...props} /> : <Redirect to="/login" />
    isLoading ? <Loading /> : <Route {...props} />
  );
};

async function getUser(
  setUser: (u: UserT) => void,
  setIsLoading: (isLoading: boolean) => void,
): Promise<void> {
  setIsLoading(true);
  // const resp = await fetchWrap('/api/currentUser');
  // if (resp.ok) {
  //   setUser(await resp.json());
  // }

  setIsLoading(false);
}
