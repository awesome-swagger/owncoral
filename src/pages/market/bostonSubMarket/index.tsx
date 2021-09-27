import { Fragment, lazy } from 'react';
import { Switch } from 'react-router-dom';

import { NavBar, ProtectedRoute } from '../../../components';
import { Cambridge } from './cambridge';
import { Somerville } from './somerville';

const Error404 = lazy(() => import('../../error404'));

type BostonSubMarketPropsT = {
  marketBostonRootUrl: string;
};
const BostonSubMarket = ({ marketBostonRootUrl }: BostonSubMarketPropsT ) => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <ProtectedRoute exact path={marketBostonRootUrl + '/cambridge'}>
          <Cambridge />
        </ProtectedRoute>
        <ProtectedRoute exact path={marketBostonRootUrl + '/somerville'}>
          <Somerville />
        </ProtectedRoute>

        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </Fragment>
  );
};

// eslint-disable-next-line import/no-default-export
export default BostonSubMarket;
