class SpotifyService {
  constructor() {
    this._baseUrl = 'https://accounts.spotify.com/authorize?';
    this._client_id = '7e1dba83ae3f43788fde03d87e941723';
    this._redirect_uri = 'http://localhost:3000/callback';
    this._scope = [
      'user-top-read',
      'user-read-recently-played',
      'user-read-currently-playing',
      'user-read-birthdate',
      'user-read-playback-state',
      'user-read-email',
      'user-read-private'
    ];
  }

  queryString(params = {}) {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
  }

  getUrl() {
    let query = this.queryString({
      response_type: 'token',
      client_id: this._client_id,
      scope: this._scope,
      redirect_uri: this._redirect_uri
    });
    return `${this._baseUrl}${query}`;
  }
}

export default SpotifyService;
