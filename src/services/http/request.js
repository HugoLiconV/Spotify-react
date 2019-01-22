import axios from 'axios';
import { loadItem } from '../localStorage';
import { ERROR_NOTIFICATION } from '../../constants';

class RequestService {
  constructor(baseUrl = 'https://api.spotify.com/v1/') {
    axios.defaults.baseURL = baseUrl;
    axios.interceptors.request.use(
      config => {
        const token = loadItem('TOKEN');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  setHeaders = () => {
    const token = loadItem('TOKEN');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
    }
  };
  async makeRequest({ url, method = 'get', data }) {
    try {
      const response = await axios[method](url, data);
      return response.data;
    } catch (e) {
      const message = e.response.data.error.message || e;
      const status = e.response.status || e;
      const type = ERROR_NOTIFICATION;
      const error = {
        message,
        status,
        type
      };
      return Promise.reject(error);
    }
  }
}

export default RequestService;
