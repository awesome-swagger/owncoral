import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Cambridge } from './cambridge';
import { Somerville } from './somerville';

const Error404 = lazy(() => import('../../error404'));

type BostonSubMarketPropsT = {
  marketBostonRootUrl: string;
};
const BostonSubMarket = ({ marketBostonRootUrl }: BostonSubMarketPropsT ) => {
  return (
    <Switch>
      <Route exact path={marketBostonRootUrl + '/cambridge'}>
        <Cambridge />
      </Route>
      <Route exact path={marketBostonRootUrl + '/somerville'}>
        <Somerville />
      </Route>

      <Route path="*" component={Error404} />
    </Switch>
  );
};

// eslint-disable-next-line import/no-default-export
export default BostonSubMarket;
