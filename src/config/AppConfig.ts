import { AxiosRequestConfig } from "axios";
import { ENV } from "./env";

const axios: AxiosRequestConfig = {
  baseURL: ENV.BASE_URL,
  responseType: 'arraybuffer',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
}

const AppConfig = {
  axios
}

export default AppConfig;
