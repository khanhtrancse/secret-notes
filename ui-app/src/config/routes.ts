import { ComponentClass, FunctionComponent } from 'react';
import { routeName } from './route-name';

import { LoginPage } from '../pages/Login';
import { HomePage } from '../pages/Home';
import { SettingPage } from '../pages/Setting';

export interface RouteConfig {
  path: string;
  component: ComponentClass<any> | FunctionComponent<any>;
}

export const authRoutes: RouteConfig[] = [
  {
    path: routeName.login,
    component: LoginPage,
  },
  {
    path: routeName.setting,
    component: SettingPage,
  },
];

export const mainRoutes: RouteConfig[] = [
  {
    path: routeName.home,
    component: HomePage,
  },
];
