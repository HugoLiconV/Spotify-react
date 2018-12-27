import RequestService from './request';

class AlbumService extends RequestService {
  // GET	/v1/albums/{id}	Get an Album	album
  async getAlbum(id) {
    return await this.makeRequest({ url: `albums/${id}` });
  }
  // GET	/v1/albums/{id}/tracks	Get an Album's Tracks	tracks
  async getAlbumsTracks(id) {
    return await this.makeRequest({ url: `albums/${id}/tracks` });
  }
}

export default AlbumService;
