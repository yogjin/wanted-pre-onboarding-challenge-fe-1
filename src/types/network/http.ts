import { AxiosInstance } from 'axios';

export default interface HttpClient {
  readonly baseURL: string;
  axios: AxiosInstance;
}
