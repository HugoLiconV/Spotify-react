import RequestService from './request';

class SearchService extends RequestService {
  //GET	/v1/search	Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string
  async search(query, type = [], limit = 20, offset = 0) {
    const data = {
      query,
      type,
      limit,
      offset
    };
    if (!query) {
      throw new Error('Search query is required');
    } else if (type.length === 0) {
      throw new Error('Valid types are album, artist, playlist and track');
    } else if (limit > 50 || limit < 1) {
      throw new Error('limit must be a value between 1 and 50');
    } else if (offset < 0 || offset > 10000) {
      throw new Error('offset must be a value between 0 and 10000');
    }
    return await this.makeRequest({ url: 'search', data });
  }
}

export default SearchService;
