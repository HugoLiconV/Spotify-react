import axios from 'axios';
import { loadItem } from '../localStorage';

class RequestService {
  constructor(baseUrl = 'https://api.spotify.com/v1/') {
    axios.defaults.baseURL = baseUrl;
    const token = loadItem('TOKEN');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
    }
  }

  async makeRequest({ url, method = 'get', data }) {
    try {
      const response = await axios[method](url, data);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return Promise.reject(e);
    }
  }
}

export default RequestService;
