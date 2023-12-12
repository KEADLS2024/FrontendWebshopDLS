import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
export const axiosInstance = axios.create({
// Change this to our api when we have it ready
  baseURL: "https://localhost:7003",
  // params: {
  //   key: import.meta.env.VITE_API_KEY,
  // },
});

export interface LoginResponse {
  token: string;
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

  //  login function to the ApiClient class
  login = (credentials: LoginCredentials) =>
    axiosInstance.post<LoginResponse>(`/usercredentials/login`, credentials).then(res => {
      // Here we handle the response after logging in
      const { token } = res.data;
      localStorage.setItem('token', token); // Save the token in local storage
      return token; // Return the token for use in your application
    });

 
}

export default ApiClient;