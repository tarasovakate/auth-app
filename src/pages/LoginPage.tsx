import React from 'react';
import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';
import { AuthService } from '../services/AuthService';
import { useAuthContext } from '../components/AuthProvider/context';

export const LoginPage = () => {
  const { state, dispatch } = useAuthContext();
  const onFinish = (values: { password: string; username: string }) => {
    AuthService.login(dispatch, values);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Content>
        <Row style={{ height: '100%' }} align="middle" justify="center">
          <Card>
            <Col>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={state.loading}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Card>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
