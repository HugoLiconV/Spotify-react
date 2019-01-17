import RequestService from './request';

class PlayerService extends RequestService {
  // GET	/v1/me/player/recently-played	Get the Current User's Recently Played Tracks
  getRecentlyPlayed = async (limit = 20, before = Date.now(), after = null) => {
    const data = {
      limit,
      before,
      after
    };
    return await this.makeRequest({ url: '/me/player/recently-played', data });
  };
  // GET	/v1/me/player	Get Information About The User's Current Playback
  getPlayer = async () => await this.makeRequest({ url: '/me/player' });
  // GET	/v1/me/player/devices	Get a User's Available Devices
  getDevices = async () => this.makeRequest({ url: '/me/player/devices' });
  // GET	/v1/me/player/currently-playing	Get the User's Currently Playing Track
  getCurrentlyPlaying = async () =>
    await this.makeRequest({ url: '/me/player/currently-playing' });
  // POST	/v1/me/player/next	Skip User's Playback To Next Track
  next = async () =>
    await this.makeRequest({ url: '/me/player/next', method: 'post' });
  // POST	/v1/me/player/previous	Skip User's Playback To Previous Track
  previous = async () =>
    await this.makeRequest({
      url: '/me/player/previous',
      method: 'post'
    });

  // PUT	/v1/me/player/pause	Pause a User's Playback
  pause = async () =>
    await this.makeRequest({ url: '/me/player/pause', method: 'put' });
  // PUT	/v1/me/player/play	Start/Resume a User's Playback
  play = async config => {
    return await this.makeRequest({
      url: '/me/player/play',
      method: 'put',
      data: config
    });
  };
  // PUT	/v1/me/player/repeat	Set Repeat Mode On User's Playback
  setRepeat = async state =>
    await this.makeRequest({
      url: `/me/player/repeat?state=${state}`,
      method: 'put'
    });

  // PUT	/v1/me/player/seek	Seek To Position In Currently Playing Track
  seek = async position_ms => {
    const data = { position_ms };
    return await this.makeRequest({
      url: '/me/player/seek',
      method: 'put',
      data
    });
  };
  // PUT	/v1/me/player/shuffle	Toggle Shuffle For User's Playback
  toggleShuffle = async shuffle =>
    await this.makeRequest({
      url: `/me/player/shuffle?state=${shuffle}`,
      method: 'put'
    });
  // PUT	/v1/me/player	Transfer a User's Playback

  transferPlayback = async device_ids => {
    const data = { device_ids };
    return await this.makeRequest({
      url: '/me/player',
      method: 'put',
      data
    });
  };
  // PUT	/v1/me/player/volume	Set Volume For User's Playback
  setVolume = async volumePercent => {
    if (volumePercent < 0 || volumePercent > 100) {
      throw new Error('Volume must be a value from 0 to 100 inclusive');
    }
    return await this.makeRequest({
      url: `/me/player/volume?volume_percent=${volumePercent}`,
      method: 'put'
    });
  };
}

export default PlayerService;
