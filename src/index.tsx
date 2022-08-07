import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TokenStorageImpl } from './db/token';
import { AuthServiceImpl } from './service/auth';
import { AuthProvider } from './context/AuthContext';
import HttpClientImpl from './network/http';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const baseURL = process.env.REACT_APP_BASE_URL || '';
const httpClientImpl = new HttpClientImpl(baseURL);
const tokenStorageImpl = new TokenStorageImpl('token');
const authServiceImpl = new AuthServiceImpl(httpClientImpl, tokenStorageImpl);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authService={authServiceImpl}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
