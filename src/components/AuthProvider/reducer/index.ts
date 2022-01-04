import { AuthActions, AuthActionTypes, AuthState } from './types';

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};

export const authReducer = (
  state: AuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case AuthActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case AuthActionTypes.SET_TOKENS: {
      return { ...state, ...action.payload };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
