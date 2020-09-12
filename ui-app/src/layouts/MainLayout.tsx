import React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from '../config/routes';

interface PropsType {
  routes: RouteConfig[];
  onLogout: Function;
}

export class MainLayout extends React.Component<PropsType, {}> {
  render(): JSX.Element {
    return (
      <section className="layout">
        {this.props.routes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          );
        })}
      </section>
    );
  }
}
