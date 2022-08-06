import TokenStorage from '../types/db/token';

export class TokenStorageImpl implements TokenStorage {
  readonly TOKEN;
  constructor(TOKEN: string) {
    this.TOKEN = TOKEN;
  }
  set token(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
  get token() {
    return localStorage.getItem(this.TOKEN) || '';
  }
  clearToken() {
    localStorage.removeItem(this.TOKEN);
  }
}
