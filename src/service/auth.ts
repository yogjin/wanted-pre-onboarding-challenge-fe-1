import AuthService from '../types/auth';
import HttpClient from '../types/http';
import TokenStorage from '../types/token';

export class AuthServiceImpl implements AuthService {
  private http;
  private tokenStorage;
  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signUp(email: string, password: string) {
    const response = await this.http.axios.post(
      '/users/create',
      JSON.stringify({ email, password })
    );
    this.tokenStorage.token = response.data.token;
    return response;
  }

  async login(email: string, password: string) {
    const response = await this.http.axios.post(
      '/users/login',
      JSON.stringify({ email, password })
    );
    this.tokenStorage.token = response.data.token;
    return response;
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
