import RequestService from './request';

class ProfileService extends RequestService {
  async getCurrentProfile() {
    return this.makeRequest({ url: '/me' });
  }
}

export default ProfileService;
