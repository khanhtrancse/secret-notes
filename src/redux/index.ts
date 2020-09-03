import { combineReducers } from 'redux';
import { authReducer as auth } from './auth/auth.reducer';
import { connectRouter } from 'connected-react-router';
import { history } from '../config/history';

export const reducer = combineReducers({
  router: connectRouter(history),
  auth,
});

export type RootState = ReturnType<typeof reducer>;
