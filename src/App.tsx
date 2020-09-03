import React from 'react';
import { authRoutes, mainRoutes } from './config/routes';
import { AuthLayout, MainLayout } from './layouts';
import { Provider, connect } from 'react-redux';
import { history } from './config/history';
import { configureStore } from './config/store';
import { reducer } from './redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authAction } from './redux/auth';

const store = configureStore(reducer);

const App: React.FC = (props: any) => {
  return (
    <div>
      <ConnectedRouter history={history}>
        <MainLayout
          routes={mainRoutes}
          onLogout={() => store.dispatch(authAction.logout())}
        />
        <AuthLayout routes={authRoutes} />
      </ConnectedRouter>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state): any => ({});

const AppWithState = connect(mapStateToProps, null)(App);

const AppWithRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <AppWithState />
    </Provider>
  );
};

export default AppWithRedux;
