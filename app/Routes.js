import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import CalculatorContainer from './containers/CalculatorContainer';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CALCULATOR} component={CalculatorContainer} />
    </Switch>
  </App>
);
