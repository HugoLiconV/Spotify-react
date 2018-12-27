import RequestService from './request';

class ArtistService extends RequestService {
  // GET	/v1/artists/{id}	Get an Artist	artist
  async getArtist(id) {
    return await this.makeRequest({ url: `artists/${id}/` });
  }
  // GET	/v1/artists/{id}/albums	Get an Artist's Albums	albums
  async getArtistsAlbums(id) {
    return await this.makeRequest({ url: `artists/${id}/albums` });
  }
  // GET	/v1/artists/{id}/top-tracks	Get an Artist's Top Tracks	tracks
  async getArtistsTopTracks(id) {
    return await this.makeRequest({ url: `artists/${id}/top-tracks` });
  }
  // GET	/v1/artists/{id}/related-artists	Get an Artist's Related Artists	artists
  async getArtistsRelatedArtists(id) {
    return await this.makeRequest({ url: `artists/${id}/related-artists` });
  }
}

export default ArtistService;
