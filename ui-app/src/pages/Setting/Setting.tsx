import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { push } from 'connected-react-router';
import { RootState } from '../../redux';
import { authAction, AuthForm } from '../../redux/auth';
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

class SettingScreen extends React.Component<PropsFromRedux, {}> {
  handleSubmit: (e) => void = (e) => {
    e.preventDefault();

    this.props.login(this.props.auth.form);
  };

  changeField = (key: string, value: any): void => {
    this.props.changeFields({
      [`form.${key}`]: value,
      [`form.${key}Error`]: undefined,
    });
  };

  render(): JSX.Element {
    const form = this.props.auth.form as AuthForm;
    return (
      <div className="mx-0 w-100 mt-5 pt-5 row justify-content-center align-items-center">
        <h4 className="w-100 text-center">Setting</h4>
        <div className="w-100 text-center">
          Enter the notes password to view locked notes
        </div>
        <form
          style={{ width: '20em' }}
          onSubmit={this.handleSubmit}
          className="mt-3 form"
        >
          <input
            type="password"
            className="form-control"
            value={form.password}
            onChange={(event): void =>
              this.changeField('password', event.target.value)
            }
          />
        </form>
      </div>
    );
  }
}

export const SettingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingScreen);
