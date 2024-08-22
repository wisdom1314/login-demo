// src/pages/LoginPage.tsx
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/route';

import axios from 'axios';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();


  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('/api/login', values);
      console.log('Login Success:', response.data);
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('登录失败:', errorInfo);
  };

  const handleRegisterClick = () => {
    navigate(routes.REGISTER);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">登录</h2>
        <Form
          name="login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }, { min: 6, message: '密码长度至少为6位!' },]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="w-full mb-2">
              登录
            </Button>
            <Button
              type="link"
              className="text-blue-500 mt-2"
              onClick={handleRegisterClick}
            >
              没有账户？点击这里注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
