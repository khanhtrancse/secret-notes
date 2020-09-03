import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteConfig } from '../config/routes';

interface PropsType {
  routes: RouteConfig[];
}

export class AuthLayout extends React.Component<PropsType, {}> {
  render(): JSX.Element {
    return (
      <div>
        <Switch>
          {this.props.routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}

          {this.props.routes.length > 0 ? (
            <Redirect to={this.props.routes[0].path} />
          ) : null}
        </Switch>
      </div>
    );
  }
}
