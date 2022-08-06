export default interface TokenStorage {
  readonly TOKEN: string;
  token: string;
  clearToken: () => void;
}
