import React from 'react';

export enum PublicRoutes {
  LOGIN = '/login',
}

export enum PrivateRoutes {
  MAIN = '/',
}

export interface IRoute<T> {
  path: T;
  Component: React.ReactNode;
}

export type IPublicRoute = IRoute<PublicRoutes>;
export type IPrivateRoute = IRoute<PrivateRoutes>;
