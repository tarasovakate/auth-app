import { createContext, useContext } from 'react';
import { initialState } from './reducer';
import { AuthState } from './reducer/types';

interface IAuthContext {
  state: AuthState;
  dispatch: any;
}

const defaultValue: IAuthContext = {
  state: initialState,
  dispatch: () => {},
};

export const AuthContext = createContext(defaultValue);

export const useAuthContext = () => useContext(AuthContext);
