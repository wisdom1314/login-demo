// src/routes.ts
import LoginPage from '../pages/login/LoginPage';
import RegistrationPage from '../pages/login/RegistrationPage';

// 定义路由配置
export const routes = {
  LOGIN: '/',
  REGISTER: '/register',
};

// 路由配置与组件映射
export const routeComponents = {
  [routes.LOGIN]: LoginPage,
  [routes.REGISTER]: RegistrationPage,
};
