import { AuthState } from './auth.interface';

export const initialState: AuthState = {
  isFetching: false,
  form: {
    password: '',
    passwordError: null,
  },
  password: null,
};
