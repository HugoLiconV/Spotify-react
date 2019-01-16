import RequestService from './request';

class PersonalizationService extends RequestService {
  //GET	/v1/me/top/{type}	Get a User's Top Artists and Tracks	artists or tracks
  getUsersTopArtists = async (
    timeRange = 'medium_term',
    limit = 20,
    offset = 0
  ) =>
    await this.makeRequest({
      url: `me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${offset}`
    });
  getUsersTopTracks = async (
    timeRange = 'medium_term',
    limit = 20,
    offset = 0
  ) =>
    await this.makeRequest({
      url: `me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`
    });
}

export default PersonalizationService;
