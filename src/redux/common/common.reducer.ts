import { Action, AppTypes } from './common.action';

export const commonHandler = (
  state: any,
  action: Action,
  initialState: any,
): any => {
  console.log('Handle action', action);
  switch (action.type) {
    case AppTypes.reset:
      return initialState;
    default:
      return state;
  }
};
