import { AxiosResponse } from 'axios';

export default interface AuthService {
  signUp(email: string, password: string): Promise<AxiosResponse>;
  login(email: string, password: string): Promise<AxiosResponse>;
}
