import React from 'react';
import { ConfigProvider, theme } from 'antd';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

