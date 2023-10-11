import axios from "axios";

const apiClient = axios.create({
// Change this to our api when we have it ready
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;