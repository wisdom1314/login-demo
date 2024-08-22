// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routeComponents } from './routes/route'; // 导入路由配置

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {Object.entries(routeComponents).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
