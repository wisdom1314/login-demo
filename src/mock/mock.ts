// src/mocks/mock.ts
import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/api/login', 'post', {
  success: true,
  message: '登录成功',
  data: {
    id: '@id',
    name: '@name',
    email: '@EMAIL',
  },
});

// 模拟注册接口
Mock.mock('/api/register', 'post', {
  success: true,
  message: '注册成功',
  data: {
    id: '@id',
    name: '@name',
  },
});

