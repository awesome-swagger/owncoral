import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import { getUser } from '../../lib/queries';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user) setUser(user);

      const splashScreen = document.querySelectorAll('.splash-screen')[1];
      splashScreen?.classList.add('hidden');
      // for the smoothest experience, this timeout number should equal the transition property of
      // .splash-screen.hidden in `client-web/public/index.html`
      setTimeout(() => setIsLoading(false), 300);
    })();
  }, [setUser]);

  if (isLoading) return <Loading />;
  if (user) {
    // Let through signup paths
    if (location.pathname.startsWith('/signup/')) return <Route {...props} />;

    /*
    Users who haven't finished signup are redirected to /signup/welcome-coral.
    Users who have finished but have a low score are redirect to a wait page.
    Otherwise, users are let through.
    */
    return user?.isSignupComplete ? (
      (user?.signupScore || 0) >= 10 ? (
        <Route {...props} />
      ) : (
        <Redirect push to="/signup/almost-there" />
      )
    ) : (
      // First page after creating an account
      <Redirect push to="/signup/welcome-coral" />
    );
  }

  // Not signed in -- redirect to login
  return (
    <Redirect
      to={
        location.pathname !== '/'
          ? `/login?redirect=${encodeURIComponent(location.pathname + location.search || '')}`
          : '/login'
      }
    />
  );
};
