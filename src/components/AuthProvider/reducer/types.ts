import { User } from '../../../interfaces/User';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: null | string;
  accessToken: string | null;
  refreshToken: string | null;
}

export enum AuthActionTypes {
  SET_LOADING = 'auth/setLoading',
  SET_ERROR = 'auth/setError',
  LOGIN_SUCCESS = 'auth/login/success',
  LOGOUT = 'auth/logout',
  SET_TOKENS = 'auth/setTokens',
  CLEAR_STATE = 'auth/clearState',
}

export interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export interface SetAuthLoadingAction {
  type: AuthActionTypes.SET_LOADING;
  payload: boolean;
}

export interface SetAuthErrorAction {
  type: AuthActionTypes.SET_ERROR;
  payload: string;
}

export interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export interface SetTokensAction {
  type: AuthActionTypes.SET_TOKENS;
  payload: {
    accessToken: string | null;
    refreshToken: string | null;
  };
}

export type AuthActions =
  | LoginSuccessAction
  | LogoutAction
  | SetAuthErrorAction
  | SetTokensAction
  | SetAuthLoadingAction;
