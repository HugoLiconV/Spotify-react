import RequestService from './request';

class PlaylistService extends RequestService {
  // GET	/v1/playlists/{playlist_id}	Get a Playlist
  getPlaylist = async id => await this.makeRequest({ url: `playlists/${id}` });
  // GET	/v1/playlists/{playlist_id}/tracks	Get a Playlist's Tracks
  getPlaylistsTracks = async id =>
    await this.makeRequest({
      url: `playlists/${id}/tracks?fields=items(track)`
    });
}

export default PlaylistService;
