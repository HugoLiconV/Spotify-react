import RequestService from './request';

class PlayerService extends RequestService {
  // GET	/v1/me/player/recently-played	Get the Current User's Recently Played Tracks
  async getRecentlyPlayed(limit = 20, before = Date.now(), after = null) {
    const data = {
      limit,
      before,
      after
    };
    return await this.makeRequest({ url: '/me/player/recently-played', data });
  }
  // GET	/v1/me/player	Get Information About The User's Current Playback
  async getPlayer() {
    return await this.makeRequest({ url: '/me/player' });
  }
  // GET	/v1/me/player/devices	Get a User's Available Devices
  async getDevices() {
    return await this.makeRequest({ url: '/me/player/devices' });
  }
  // GET	/v1/me/player/currently-playing	Get the User's Currently Playing Track
  async getCurrentlyPlaying() {
    return await this.makeRequest({ url: '/me/player/currently-playing' });
  }
  // POST	/v1/me/player/next	Skip User's Playback To Next Track
  async next() {
    return await this.makeRequest({ url: '/me/player/next', method: 'post' });
  }
  // POST	/v1/me/player/previous	Skip User's Playback To Previous Track
  async previous() {
    return await this.makeRequest({
      url: '/me/player/previous',
      method: 'post'
    });
  }
  // PUT	/v1/me/player/pause	Pause a User's Playback
  async pause() {
    return await this.makeRequest({ url: '/me/player/pause', method: 'put' });
  }
  // PUT	/v1/me/player/play	Start/Resume a User's Playback
  async play(contextUri, offset, position) {
    const data = {
      context_uri: contextUri,
      offset,
      position_ms: position
    };
    return await this.makeRequest({
      url: '/me/player/play',
      method: 'put',
      data
    });
  }
  // PUT	/v1/me/player/repeat	Set Repeat Mode On User's Playback
  async setRepeat(state) {
    return await this.makeRequest({
      url: `/me/player/repeat?state=${state}`,
      method: 'put'
    });
  }
  // PUT	/v1/me/player/seek	Seek To Position In Currently Playing Track
  async seek(position_ms) {
    const data = { position_ms };
    return await this.makeRequest({
      url: '/me/player/seek',
      method: 'put',
      data
    });
  }
  // PUT	/v1/me/player/shuffle	Toggle Shuffle For User's Playback
  async toggleShuffle(shuffle) {
    return await this.makeRequest({
      url: `/me/player/shuffle?state=${shuffle}`,
      method: 'put'
    });
  }
  // PUT	/v1/me/player	Transfer a User's Playback

  async transferPlayback(device_ids) {
    const data = { device_ids };
    return await this.makeRequest({
      url: '/me/player/player',
      method: 'put',
      data
    });
  }
  // PUT	/v1/me/player/volume	Set Volume For User's Playback
  async setVolume(volumePercent) {
    if (volumePercent < 0 || volumePercent > 100) {
      throw new Error('Volume must be a value from 0 to 100 inclusive');
    }
    return await this.makeRequest({
      url: `/me/player/volume?volume_percent=${volumePercent}`,
      method: 'put'
    });
  }
}

export default PlayerService;
