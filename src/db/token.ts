export default class TokenStorage {
  private TOKEN;
  constructor(TOKEN: string) {
    this.TOKEN = TOKEN;
  }
  saveToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN);
  }
  clearToken() {
    localStorage.removeItem(this.TOKEN);
  }
}
