import RequestService from './request';

class ArtistService extends RequestService {
  // GET	/v1/artists/{id}	Get an Artist	artist
  getArtist = async id => await this.makeRequest({ url: `artists/${id}/` });
  // GET	/v1/artists/{id}/albums	Get an Artist's Albums	albums
  getArtistsAlbums = async id =>
    await this.makeRequest({ url: `artists/${id}/albums` });
  // GET	/v1/artists/{id}/top-tracks	Get an Artist's Top Tracks	tracks
  getArtistsTopTracks = async id =>
    await this.makeRequest({ url: `artists/${id}/top-tracks?country=US` });
  // GET	/v1/artists/{id}/related-artists	Get an Artist's Related Artists	artists
  getArtistsRelatedArtists = async id =>
    await this.makeRequest({ url: `artists/${id}/related-artists` });
}

export default ArtistService;
