import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5227",
  // params: { key: import.meta.env.VITE_API_KEY },
});

export interface LoginResponse {
  token: string;
  role: string; // Add role to the login response
}

export interface LoginCredentials {
  username: string;
  password: string;
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);

  get = (id: string | number) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);

  login = (credentials: LoginCredentials) =>
    axiosInstance.post<LoginResponse>(`/usercredentials/login`, credentials).then(res => {
      const { token, role } = res.data; // Now also includes the role
      localStorage.setItem('token', token);
      localStorage.setItem('role', role); // Save the role in local storage
      return { token, role }; // Return both token and role
    });
}

export default ApiClient;
