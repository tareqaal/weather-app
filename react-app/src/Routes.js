import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { WeatherComponent } from './pages/WeatherComponent';
import { PageNotFound } from './universe';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WeatherComponent} />
    <Route path="/404" component={PageNotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;