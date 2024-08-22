// src/pages/RegistrationPage.tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/route';
import axios from 'axios';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('/api/register', values);
      console.log('Login Success:', response.data);
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('注册失败:', errorInfo);
  };

  const handleLoginClick = () => {
     navigate(routes.LOGIN)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl mb-4">注册</h2>
        <Form
          name="register"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
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
            rules={[{ required: true, message: '请输入密码!' }, { min: 8, message: '密码长度至少为8位!' },]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: '请确认您的密码!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="w-full mb-2">
              注册
            </Button>
            <Button
              type="link"
              className="text-blue-500 mt-2"
              onClick={handleLoginClick}
            >
              已有账户？点击这里登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
