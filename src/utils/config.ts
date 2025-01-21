import axios from "axios";

const isProduction = import.meta.env.MODE === "production";

const apiUrl: string = isProduction
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

const config = {
  apiUrl,
};

export { axiosInstance };
export default config;
