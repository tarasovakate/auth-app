import React from 'react';
import {
  loginSuccess,
  logout,
  setError,
  setLoading,
} from '../components/AuthProvider/reducer/actions';
import { AuthActions } from '../components/AuthProvider/reducer/types';
import { TOKENS, USER_KEY } from '../constants';
import { IUserLoginDto } from '../dto/UserLoginDto';
import { safeJSONParser } from '../utils/safeJSONParser';
import { TokenService } from './TokenService';

export class AuthService {
  static login(dispatch: React.Dispatch<AuthActions>, creds: IUserLoginDto) {
    dispatch(setLoading(true));
    TokenService.generatePairTokens(creds)
      .then((userData) => {
        const user = {
          username: creds.username,
          regDate: userData.regData,
          name: userData.name,
        };
        dispatch(
          loginSuccess({
            user,
            accessToken: userData.accessToken,
            refreshToken: userData.refreshToken,
          }),
        );
        localStorage.setItem(
          TOKENS.ACCESS,
          JSON.stringify(userData.accessToken),
        );
        localStorage.setItem(
          TOKENS.REFRESH,
          JSON.stringify(userData.refreshToken),
        );
        localStorage.setItem(USER_KEY, JSON.stringify(user));

        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(err));
      });
  }

  static checkLogin(dispatch: React.Dispatch<AuthActions>) {
    const { accessToken, refreshToken } = TokenService.getPairTokens();
    const user = safeJSONParser(localStorage.getItem(USER_KEY));
    dispatch(loginSuccess({ accessToken, refreshToken, user }));
  }

  static loogut(dispatch: React.Dispatch<AuthActions>) {
    TokenService.clearPairTokens();
    dispatch(logout());
  }
}
