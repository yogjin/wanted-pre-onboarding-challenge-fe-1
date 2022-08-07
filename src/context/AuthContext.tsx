import { AxiosResponse } from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { FC } from 'react';
import AuthService from '../types/auth';

interface AuthProviderProps {
  authService: AuthService;
  children?: React.ReactNode;
}

const AuthContext = createContext({});
export const AuthProvider: FC<AuthProviderProps> = ({
  authService,
  children,
}) => {
  const [user, setUser] = useState<AxiosResponse>();

  const login = async (email: string, password: string) => {
    setUser(await authService.login(email, password));
  };

  const context = { user, login };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
