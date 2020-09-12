import { ComponentClass, FunctionComponent } from 'react';
import { routeName } from './route-name';

import { LoginPage } from '../pages/Login';
import { HomePage } from '../pages/Home';

export interface RouteConfig {
  path: string;
  component: ComponentClass<any> | FunctionComponent<any>;
}

export const authRoutes: RouteConfig[] = [
  {
    path: routeName.login,
    component: LoginPage,
  },
];

export const mainRoutes: RouteConfig[] = [
  {
    path: routeName.home,
    component: HomePage,
  },
];
