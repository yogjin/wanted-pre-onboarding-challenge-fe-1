import { AxiosResponse } from 'axios';

export default interface AuthService {
  signUp(email: string, password: string): Promise<string>;
  login(email: string, password: string): Promise<string>;
  logout(): void;
  getToken(): string;
}
