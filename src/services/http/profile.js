import RequestService from './request';

class ProfileService extends RequestService {
  getCurrentProfile = async () => this.makeRequest({ url: '/me' });
}

export default ProfileService;
