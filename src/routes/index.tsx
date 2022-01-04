import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import {
  IPrivateRoute,
  IPublicRoute,
  PrivateRoutes,
  PublicRoutes,
} from './types';

export const publicRoutes: IPublicRoute[] = [
  {
    path: PublicRoutes.LOGIN,
    Component: <LoginPage />,
  },
];

export const privateRoutes: IPrivateRoute[] = [
  {
    path: PrivateRoutes.MAIN,
    Component: <MainPage />,
  },
];
