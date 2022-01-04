import React, { useReducer } from 'react';

import { AuthContext } from './context';
import { authReducer, initialState } from './reducer';

export const AuthContextProvider: React.FC = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state: auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
