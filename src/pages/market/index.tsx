import { Fragment } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import { NavBar, ProtectedRoute } from '../../components';
import Error404 from '../error404';
import BostonMarket from './bostonMarket';
import BostonSubMarket from './bostonSubMarket';

function Market() {
  const { url: marketRootUrl } = useRouteMatch();

  return (
    <Fragment>
      <NavBar />
      <Switch>
        <ProtectedRoute exact path={marketRootUrl + '/boston'}>
          <BostonMarket />
        </ProtectedRoute>
        <ProtectedRoute exact path={marketRootUrl + '/boston/:name'}>
          <BostonSubMarket marketBostonRootUrl={marketRootUrl + '/boston'} />
        </ProtectedRoute>

        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </Fragment>
  );
}

// eslint-disable-next-line import/no-default-export
export default Market;
