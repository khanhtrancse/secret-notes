import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../redux';
import { authAction } from '../../redux/auth';
import { routeName } from '../../config/route-name';

const mapStateToProps = (state: RootState): any => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  changeFields: authAction.changeFields,
  goToPage: push,
  login: authAction.login,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class LoginScreen extends React.Component<PropsFromRedux, {}> {
  render(): JSX.Element {
    return (
      <div className="mx-0 w-100 mt-5 pt-5 row justify-content-center align-items-center">
        <h5 className="text-white">Secret Notes</h5>
      </div>
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
