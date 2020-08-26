import { createContext } from 'react';
import { LoginActionTypes, LoginState } from './types';

export const initialLoginState: LoginState = {
  login: false,
};

export const loginReducer = (state: LoginState, action: LoginActionTypes) => {
  switch (action.type) {
    case 'login':
      return { login: state.login };
    default:
      throw new Error('Unexpected action');
  }
};

export const LoginContext = createContext<{
  LoginState: typeof initialLoginState;
  dispatchClicksLogin: (action: LoginActionTypes) => void;
}>({
  LoginState: initialLoginState,
  dispatchClicksLogin: () => {},
});
