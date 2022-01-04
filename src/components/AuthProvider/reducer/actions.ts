import { User } from '../../../interfaces/User';
import {
  AuthActionTypes,
  LoginSuccessAction,
  LogoutAction,
  SetAuthLoadingAction,
  SetAuthErrorAction,
  SetTokensAction,
} from './types';

export const setLoading = (isLoading: boolean): SetAuthLoadingAction => {
  return {
    type: AuthActionTypes.SET_LOADING,
    payload: isLoading,
  };
};

export const setError = (error: string): SetAuthErrorAction => {
  return {
    type: AuthActionTypes.SET_ERROR,
    payload: error,
  };
};

export const loginSuccess = (loginData: {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}): LoginSuccessAction => {
  return {
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: loginData,
  };
};

export const setTokens = (tokens: {
  accessToken: string | null;
  refreshToken: string | null;
}): SetTokensAction => {
  return {
    type: AuthActionTypes.SET_TOKENS,
    payload: tokens,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
