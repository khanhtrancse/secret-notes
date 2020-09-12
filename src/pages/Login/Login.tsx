import React from 'react';
import { Form, Typography, Input } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../redux';
import { authAction } from '../../redux/auth';
import { routeName } from '../../config/route-name';

const { Title } = Typography;

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
    this.props.goToPage(routeName.home);
  };

  changeField = (key: string, value: any): void => {
    this.props.changeFields({
      [`investorForm.${key}`]: value,
      [`investorForm.${key}Error`]: undefined,
    });
  };

  render(): JSX.Element {
    return (
      <div className="mx-0 w-100 mt-5 pt-5 row justify-content-center align-items-center">
        <Title className="w-100 text-center" level={4}>
          This note is locked
        </Title>
        <div className="w-100 text-center">
          Enter the notes password to view locked notes
        </div>
        <Form
          style={{ width: '20em' }}
          onSubmit={this.handleSubmit}
          className="mt-3"
        >
          <Form.Item>
            <Input type="password" />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
