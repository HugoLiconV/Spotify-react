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
      // TODO: Check 404 error
      console.log(e.message);
      /* 
      Errors en el store
      dispatch (errorActions.showActions())
      el error va a estar en store
      errorActions.clearErrors
       */
      return Promise.reject(e);
    }
  }
}

export default RequestService;
