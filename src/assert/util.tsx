import React from 'react';
import {
  Route
} from 'react-router-dom';
import { RouteInterface } from './interface';

export const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
  return (
    <Route
      key={index}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}