import RequestService from './request';

class BrowseService extends RequestService {
  // GET	/v1/browse/categories/{category_id}	Get a Category	category
  getCategory = async id =>
    await this.makeRequest({ url: `browse/categories/${id}` });
  // GET	/v1/browse/categories/{category_id}/playlists	Get a Category's Playlists	playlists
  getCategorysPlaylists = async id =>
    await this.makeRequest({ url: `browse/categories/${id}/playlists` });
  // GET	/v1/browse/categories	Get a List of Categories	categories
  getCategories = async () =>
    await this.makeRequest({ url: `browse/categories/` });
  // GET	/v1/browse/featured-playlists	Get a List of Featured Playlists	playlists
  getFeaturedPlaylists = async (limit = 20, offset = 0) =>
    await this.makeRequest({
      url: `browse/featured-playlists?limit=${limit}&offset=${offset}`
    });
  // GET	/v1/browse/new-releases	Get a List of New Releases	albums
  getNewReleases = async (limit = 20, offset = 0) =>
    await this.makeRequest({
      url: `browse/new-releases?limit=${limit}&offset=${offset}`
    });
}

export default BrowseService;
