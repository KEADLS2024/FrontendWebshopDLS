// Importerer axios og AxiosRequestConfig fra axios-biblioteket for at håndtere HTTP-anmodninger.
import axios, { AxiosRequestConfig } from "axios";

// Definerer et generisk interface 'FetchResponse' for at standardisere responsformatet fra API-anmodninger.
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// Opretter en axios-instans med en basis-URL for alle fremtidige HTTP-anmodninger.
// This instance will be used for all HTTP requests
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5227",
  
});

// Definerer et interface 'LoginResponse' for at repræsentere strukturen af en login-svar.
export interface LoginResponse {
  token: string;
  role: string; // Inkluderer rolle i login-svaret.
}

// Definerer et interface 'LoginCredentials' for at repræsentere loginoplysninger.
export interface LoginCredentials {
  username: string;
  password: string;
}

// Definerer en klasse 'ApiClient' til at håndtere forskellige API-anmodninger.
class ApiClient<T> {
  endpoint: string;

  // Konstruktør til at initialisere ApiClient med en specifik endpoint.
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  // !Important! The use of .then means that once the data is retrieved (asynchronously), the function within .then() will execute to process the response.
  // Funktion til at hente alle data fra en bestemt endpoint.
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);

  // Funktion til at hente specifik data ved hjælp af et id fra en endpoint.
  get = (id: string | number) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);

 //Login-funktionen sender POST-anmodning med brugeroplysninger via axios, gemmer token og rolle i localStorage og returnerer dem.
  login = (credentials: LoginCredentials) =>
    axiosInstance.post<LoginResponse>(`/usercredentials/login`, credentials).then(res => {
      const { token, role } = res.data; // Gemmer både token og rolle
      localStorage.setItem('token', token);
      localStorage.setItem('role', role); // Gemmer rollen i lokal lagring
      return { token, role }; // Returnerer både token og rolle
    });
}

// Eksporterer ApiClient-klassen for brug i andre dele af applikationen.
export default ApiClient;