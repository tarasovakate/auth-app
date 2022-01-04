import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { PrivateRoutes, PublicRoutes } from '../../routes/types';
import { AuthService } from '../../services/AuthService';
import { useAuthContext } from '../AuthProvider/context';

export const RootRouter: React.FC = () => {
  const { state, dispatch } = useAuthContext();

  useEffect(() => {
    AuthService.checkLogin(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Boolean(state.accessToken)) {
    return (
      <Routes>
        {publicRoutes.map(({ Component, path }) => (
          <Route key={path} path={path} element={Component} />
        ))}
        <Route path="*" element={<Navigate to={PublicRoutes.LOGIN} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {privateRoutes.map(({ Component, path }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={PrivateRoutes.MAIN} />} />
    </Routes>
  );
};
