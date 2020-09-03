import { ComponentClass, FunctionComponent } from 'react';
import { routeName } from './route-name';

import { Login } from '../pages/Login';

export interface RouteConfig {
  path: string;
  component: ComponentClass<any> | FunctionComponent<any>;
}

export const authRoutes: RouteConfig[] = [
  {
    path: routeName.login,
    component: Login,
  },
];

export const mainRoutes: RouteConfig[] = [];
