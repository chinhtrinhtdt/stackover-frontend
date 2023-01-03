import axios from 'axios';
import AppConfig from '../config/AppConfig';

const client = axios.create(AppConfig.axios);

const configHeader = () => {
  return {
    headers: {
      // 'Authorization': `Bearer `
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoaW5oIiwidXNlcl9pZCI6MiwiZW1haWwiOiJjaGluaHRyaW5oQGNxdGR0LmFzaWEiLCJpYXQiOjE2NzIzOTU0ODYsImV4cCI6MTY3MjQwMTQ4Nn0.ZQQzJ865YWQyp1LMdI9oxQihHgpqRDEnL5SWIt419pw`
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
