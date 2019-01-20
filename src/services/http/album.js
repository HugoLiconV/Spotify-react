import RequestService from './request';

class AlbumService extends RequestService {
  // GET	/v1/albums/{id}	Get an Album	album
  getAlbum = async id => await this.makeRequest({ url: `albums/${id}` });
  // GET	/v1/albums/{id}/tracks	Get an Album's Tracks	tracks
  getAlbumsTracks = async id =>
    await this.makeRequest({ url: `albums/${id}/tracks?limit=50` });
}

export default AlbumService;
