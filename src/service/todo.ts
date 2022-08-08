import HttpClient from '../types/http';
import TokenStorage from '../types/token';

export class TodoServiceImpl {
  private http;
  private tokenStorage;
  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  getHeaders() {
    return {
      headers: { Authorization: `Bearer ${this.tokenStorage.token}` },
    };
  }
  async getTodos() {
    const response = await this.http.axios.get(`/todos`, this.getHeaders());
    return response.data;
  }

  async getTodoById(id: string) {
    const response = await this.http.axios.get(
      `/todos/${id}`,
      this.getHeaders()
    );
    return response.data;
  }

  async createTodo(title: string, content: string) {
    const response = await this.http.axios.post(
      `/todos`,
      JSON.stringify({ title, content }),
      this.getHeaders()
    );
    return response.data;
  }

  async updateTodo(id: string, title: string, content: string) {
    const response = await this.http.axios.put(
      `/todos/${id}`,
      JSON.stringify({ title, content }),
      this.getHeaders()
    );
    return response.data;
  }

  async deleteTodo(id: string) {
    const response = await this.http.axios.delete(
      `/todos/${id}`,
      this.getHeaders()
    );
    return response;
  }
}
