import { Action, createAction, AppTypes } from '../common';
import _ from 'lodash';
import { push } from 'connected-react-router';
import { routeName } from '../../config/route-name';
import { storage } from '../../utils/storage';
import { AuthForm } from './auth.interface';

export const Types = {
  changeFields: 'app.auth.change-fields',
};

const changeFields = (object: any = {}): Action =>
  createAction(Types.changeFields, object);

/**
 * User login
 * @param form
 */
const login = (form: AuthForm): Function => async (
  dispatch,
): Promise<boolean> => {
  dispatch(
    changeFields({
      password: form.password,
    }),
  );
  return true;
};

const logout = () => (dispatch): void => {
  dispatch(createAction(AppTypes.reset));
  dispatch(push(routeName.login));
};

export const authAction = {
  changeFields,
  login,
  logout,
};
