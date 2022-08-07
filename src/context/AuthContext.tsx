import React, { createContext, useContext, useEffect, useState } from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../types/auth';

interface AuthProviderProps {
  authService: AuthService;
  children?: React.ReactNode;
}

const AuthContext = createContext<{
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
} | null>(null);
export const AuthProvider: FC<AuthProviderProps> = ({
  authService,
  children,
}) => {
  const [user, setUser] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 백엔드 서버에서 token validation middleware 추가할 시 getToken 함수 수정 필요 -> getMe()
    setUser(authService.getToken());
  }, [authService]);

  useEffect(() => {
    user ? navigate('/') : navigate('/auth');
  }, [user, navigate]);

  const signUp = async (email: string, password: string) => {
    setUser(await authService.signUp(email, password));
  };

  const login = async (email: string, password: string) => {
    setUser(await authService.login(email, password));
  };

  const context = { login, signUp };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
export const useAuth = () => useContext(AuthContext);
