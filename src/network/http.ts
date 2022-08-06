import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private baseURL: string;
  public axios: AxiosInstance;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
