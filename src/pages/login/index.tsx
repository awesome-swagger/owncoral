import { Fragment, lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ForgotCheckEmail = lazy(() => import('./ForgotCheckEmail'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const Login = lazy(() => import('./Login'));
const NewPassword = lazy(() => import('./NewPassword'));
const VerifyEmailToken = lazy(() => import('./VerifyEmailToken'));

const Error404 = lazy(() => import('../error404'));

export const AuthRouteArray = [
  { key: "login", route: "/login", component: <Login /> },
  { key: "forgot", route: "/forgot", component: <ForgotPassword /> },
  { 
    key: "forgot-check-email",
    route: "/forgot-check-email",
    component: <ForgotCheckEmail />
  },
  { 
    key: "new-password",
    route: "/new-password/:resetToken",
    component: <NewPassword />
  },
  {
    key: "welcome-to-coral",
    route: "/welcome-to-coral/:resetToken",
    component: <NewPassword isWelcome />
  },
  {
    key: "verify-email",
    route: "/verify-email/:email/:verifyEmailToken",
    component: <VerifyEmailToken />
  }
]

function AuthPages() {
  const { url: authUrl } = useRouteMatch();

  const authObj = AuthRouteArray.find(({ key }) => key === authUrl.split('/')[1]);

  return authObj?.component || <Error404 />;
}

// eslint-disable-next-line import/no-default-export
export default AuthPages;
