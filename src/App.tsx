import React from 'react';
import { mainRoutes, authRoutes } from './config/routes';
import { MainLayout } from './layouts';
import { Provider, connect } from 'react-redux';
import { history } from './config/history';
import { configureStore } from './config/store';
import { reducer } from './redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authAction } from './redux/auth';
import { routeName } from './config/route-name';
import { LoginPage } from './pages/Login';
import { Route, Switch, Redirect } from 'react-router-dom';

const store = configureStore(reducer);

const App: React.FC = (props: any) => {
  return (
    <div>
      <ConnectedRouter history={history}>
        <Switch>
          {props.auth.password ? (
            <MainLayout
              routes={mainRoutes}
              onLogout={(): any => store.dispatch(authAction.logout())}
            />
          ) : (
            authRoutes.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
              />
            ))
          )}
          <Redirect
            to={props.auth.password ? routeName.home : routeName.login}
          />
        </Switch>
      </ConnectedRouter>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state): any => ({
  auth: state.auth,
});

const AppWithState = connect(mapStateToProps, null)(App);

const AppWithRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <AppWithState />
    </Provider>
  );
};

export default AppWithRedux;
