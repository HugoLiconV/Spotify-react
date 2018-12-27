import RequestService from './request';

class TrackService extends RequestService {
  // GET	/v1/tracks	Get Several Tracks	tracks
  async getTracks(ids) {
    const data = { ids };
    if (ids.length < 0) {
      throw new Error('ids must be an array and should not be empty.');
    }
    return await this.makeRequest({ url: 'tracks/', data });
  }
  // GET	/v1/tracks/{id}	Get a Track	track
  async getTrack(id) {
    return await this.makeRequest({ url: `tracks/${id}` });
  }
}

export default TrackService;
