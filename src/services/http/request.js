import axios from 'axios';
import { loadItem } from '../localStorage';

class RequestService {
  constructor(baseUrl = 'https://api.spotify.com/v1/') {
    axios.defaults.baseURL = baseUrl;
    const token = loadItem('TOKEN');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.common['Content-Type'] =
        'application/x-www-form-urlencoded';
    }

    // axios.interceptors.request.use(
    //   function(config) {
    //     console.log(config);
    //     return config;
    //   },
    //   function(error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    //   }
    // );
  }

  async makeRequest({ url, method = 'get', data }) {
    try {
      const response = await axios[method](url, {
        data
      });
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default RequestService;
