import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import { RouteConfig } from '../config/routes';

interface PropsType {
  routes: RouteConfig[];
  onLogout: Function;
}

export class MainLayout extends React.Component<PropsType, {}> {
  state = {
    collapsed: true,
  };

  toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(): JSX.Element {
    return (
      <Layout className="layout">
        {this.props.routes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          );
        })}
      </Layout>
    );
  }
}
