import React from 'react';
import { Menu } from 'antd';
import { useAuthContext } from '../AuthProvider/context';
import { AuthService } from '../../services/AuthService';

export const Header = () => {
  const { dispatch } = useAuthContext();

  const onLogout = () => {
    AuthService.loogut(dispatch);
  };
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item onClick={onLogout}>Logout</Menu.Item>
    </Menu>
  );
};
