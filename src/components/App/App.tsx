import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '../AuthProvider';
import RootRouter from '../RootRouter';

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <RootRouter />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
