import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import { TodoServiceImpl } from './service/todo';

interface AppProps {
  todoService: TodoServiceImpl;
}
const App: FC<AppProps> = ({ todoService }) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage todoService={todoService} />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
