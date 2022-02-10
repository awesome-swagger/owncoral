import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Error404 from '../error404';
import BostonMarket from './bostonMarket';
import BostonSubMarket from './bostonSubMarket';

function Market() {
  const { url: marketRootUrl } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={marketRootUrl + '/boston'}>
        <BostonMarket />
      </Route>
      <Route exact path={marketRootUrl + '/boston/:name'}>
        <BostonSubMarket marketBostonRootUrl={marketRootUrl + '/boston'} />
      </Route>

      <Route path="*" component={Error404} />
    </Switch>
  );
}

// eslint-disable-next-line import/no-default-export
export default Market;
