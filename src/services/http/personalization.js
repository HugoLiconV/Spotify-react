import RequestService from './request';

class PersonalizationService extends RequestService {
  //GET	/v1/me/top/{type}	Get a User's Top Artists and Tracks	artists or tracks
  getUsersTopArtists = async () =>
    await this.makeRequest({ url: 'me/top/artists' });
  getUsersTopTracks = async () =>
    await this.makeRequest({ url: 'me/top/tracks' });
}

export default PersonalizationService;
