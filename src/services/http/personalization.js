import RequestService from './request';

class PersonalizationService extends RequestService {
  //GET	/v1/me/top/{type}	Get a User's Top Artists and Tracks	artists or tracks
  async getUsersTopArtists() {
    return await this.makeRequest({ url: 'me/top/artists' });
  }
  async getUsersTopTracks() {
    return await this.makeRequest({ url: 'me/top/tracks' });
  }
}

export default PersonalizationService;
