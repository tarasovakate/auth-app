import { Col, Layout, Row } from 'antd';
import React from 'react';
import { useAuthContext } from '../components/AuthProvider/context';
import Header from '../components/Header';

export const MainPage = () => {
  const { state } = useAuthContext();
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Row style={{ height: '100%' }} align="middle" justify="center">
          <Col>
            <h1>Hello {state.user?.username}</h1>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
