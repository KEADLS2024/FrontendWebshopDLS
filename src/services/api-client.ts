import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export const axiosInstance = axios.create({
// Change this to our api when we have it ready
  baseURL: "http://localhost:5227",
  // params: {
  //   key: import.meta.env.VITE_API_KEY,
  // },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res)=> res.data);

  get = (id: string | number) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default ApiClient;