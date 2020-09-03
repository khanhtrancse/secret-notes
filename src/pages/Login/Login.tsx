import React from 'react';
import { Form } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../redux';
import { authAction } from '../../redux/auth';

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
  handleSubmit: (e) => void = (e) => {
    e.preventDefault();

    this.props.login(this.props.auth.investorForm);
    // this.props.goToPage(routeName.dashboard);
  };

  changeField = (key: string, value: any): void => {
    this.props.changeFields({
      [`investorForm.${key}`]: value,
      [`investorForm.${key}Error`]: undefined,
    });
  };

  render(): JSX.Element {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        Login
      </Form>
    );
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
