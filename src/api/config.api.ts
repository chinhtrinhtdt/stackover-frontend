import axios from 'axios';
import AppConfig from '../config/AppConfig';

const client = axios.create(AppConfig.axios);

const configHeader = () => {
  return {
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1b25nMmsxIiwidXNlcl9pZCI6NSwiZW1haWwiOiJodW9uZ2R1b25nQGNxdGR0LmFzaWEiLCJpYXQiOjE2NzIzOTMwMTIsImV4cCI6MTY3NDk4NTAxMn0.Yd5rbcRGf5aZXTDf9_mawWisaWrLbNzjMaNc8GVkK6I`
    }
  }
}

const myClient = {
  post(endpoint: string, params: any, config?: any) {
    return client.post(endpoint, params, { ...config, ...configHeader() });
  },
  put(endpoint: string, params: any, config?: any) {
    return client.put(endpoint, params, { ...config, ...configHeader() });
  },
  get(endpoint: string, config?: any) {
    return client.get(endpoint, { ...config, ...configHeader() });
  },

  delete(endpoint: string, params?: any, config?: any) {
    return client.delete(endpoint, { ...config, ...configHeader(), data: params });
  },
};

export default myClient;
