import axios, { AxiosInstance } from 'axios';
import HttpClient from '../types/http';

export default class HttpClientImpl implements HttpClient {
  readonly baseURL: string;
  public axios: AxiosInstance;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.axios = axios.create({
      baseURL: this.baseURL,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
