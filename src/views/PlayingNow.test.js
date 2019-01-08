import React from 'react';
import { PlayingNow } from './PlayingNow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<PlayingNow/> component', () => {
  let wrapper;
  let currentlyPlaying;
  let player;
  let props;
  let devices;

  beforeEach(() => {
    player = {
      device: {
        id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
        is_active: true,
        is_private_session: false,
        is_restricted: false,
        name: 'mcbk',
        type: 'Computer',
        volume_percent: 46
      },
      shuffle_state: false,
      repeat_state: 'track',
      timestamp: 1546985012099,
      context: {
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/5xLW56HlpPYJEUfPC4aj7M'
        },
        href: 'https://api.spotify.com/v1/playlists/5xLW56HlpPYJEUfPC4aj7M',
        type: 'playlist',
        uri:
          'spotify:user:hugofernandoliconvalenzuela:playlist:5xLW56HlpPYJEUfPC4aj7M'
      },
      progress_ms: 268191,
      item: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1QAJqy2dA3ihHBFIHRphZj'
              },
              href: 'https://api.spotify.com/v1/artists/1QAJqy2dA3ihHBFIHRphZj',
              id: '1QAJqy2dA3ihHBFIHRphZj',
              name: 'Cigarettes After Sex',
              type: 'artist',
              uri: 'spotify:artist:1QAJqy2dA3ihHBFIHRphZj'
            }
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5OVcAB06ttNop0LKRUUKKD'
          },
          href: 'https://api.spotify.com/v1/albums/5OVcAB06ttNop0LKRUUKKD',
          id: '5OVcAB06ttNop0LKRUUKKD',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/f8ddd6c6f35782d2be4afc71cbb99e0d04aec481',
              width: 640
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/4470dd686ba3a7ef4ab504ae925e3afc01e5939f',
              width: 300
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/4d9d31e7125ead35c973f5715224e3948d738809',
              width: 64
            }
          ],
          name: 'Cigarettes After Sex',
          release_date: '2017-06-09',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:5OVcAB06ttNop0LKRUUKKD'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1QAJqy2dA3ihHBFIHRphZj'
            },
            href: 'https://api.spotify.com/v1/artists/1QAJqy2dA3ihHBFIHRphZj',
            id: '1QAJqy2dA3ihHBFIHRphZj',
            name: 'Cigarettes After Sex',
            type: 'artist',
            uri: 'spotify:artist:1QAJqy2dA3ihHBFIHRphZj'
          }
        ],
        disc_number: 1,
        duration_ms: 290616,
        explicit: false,
        external_ids: {
          isrc: 'USBQU1700034'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7McZS9J6h0SKoZBR6cfcFe'
        },
        href: 'https://api.spotify.com/v1/tracks/7McZS9J6h0SKoZBR6cfcFe',
        id: '7McZS9J6h0SKoZBR6cfcFe',
        is_local: false,
        name: 'Apocalypse',
        popularity: 66,
        preview_url:
          'https://p.scdn.co/mp3-preview/3cb23e52730e9fa9dc61807796f6da118989d455?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:7McZS9J6h0SKoZBR6cfcFe'
      },
      currently_playing_type: 'track',
      is_playing: true
    };
    currentlyPlaying = {
      item: {
        album: {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4ZKIf1mbtchoPebHfyt3Wf'
              },
              href: 'https://api.spotify.com/v1/artists/4ZKIf1mbtchoPebHfyt3Wf',
              id: '4ZKIf1mbtchoPebHfyt3Wf',
              name: 'Trailer Trash Tracys',
              type: 'artist',
              uri: 'spotify:artist:4ZKIf1mbtchoPebHfyt3Wf'
            }
          ],
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/63851d447107aa0eb8b5b5e28d2bb3f9ba23f12b',
              width: 640
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/f01e6d66349f2c6bbbb211580400c3773100bdc4',
              width: 300
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/af9cf8fdc6ed04b0041fb5e55469acfb165815df',
              width: 64
            }
          ],
          name: 'Coup De Grace'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4ZKIf1mbtchoPebHfyt3Wf'
            },
            href: 'https://api.spotify.com/v1/artists/4ZKIf1mbtchoPebHfyt3Wf',
            id: '4ZKIf1mbtchoPebHfyt3Wf',
            name: 'Trailer Trash Tracys',
            type: 'artist',
            uri: 'spotify:artist:4ZKIf1mbtchoPebHfyt3Wf'
          }
        ],
        name: 'You Wish You Were Red'
      }
    };
    devices = [
      {
        id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
        is_active: true,
        is_private_session: false,
        is_restricted: false,
        name: 'mcbk',
        type: 'Computer',
        volume_percent: 46
      }
    ];
    props = {
      currentlyPlaying,
      player,
      devices,
      getCurrentlyPlaying: jest.fn(),
      nextSong: jest.fn(),
      getPlayer: jest.fn(),
      previousSong: jest.fn(),
      setVolume: jest.fn(),
      getDevices: jest.fn(),
      pause: jest.fn(),
      play: jest.fn(),
      setRepeat: jest.fn(),
      toggleShuffle: jest.fn()
    };

    wrapper = shallow(<PlayingNow {...props} />);
  });

  it('should show current song playing info (artist and title)', () => {
    const title = wrapper.find('.song-title');
    const artist = wrapper.find('.song-artist');
    expect(title).toExist();
    expect(artist).toExist();
    expect(title.text()).toBe(currentlyPlaying.item.name);
    expect(artist.text()).toBe('Trailer Trash Tracys');
  });
  it("should show album's cover", () => {
    expect(wrapper.find('Cover')).toExist();
  });
  /*
   * it should show song progress bar
   * it should show artist info when you click on artist name
   * it should show album info when you click on album's cover
   */
  it('should show a list of controls', () => {
    expect(wrapper.find('#media-controls')).toExist();
  });

  it("should show recently played album's covers", () => {
    expect(wrapper.find('AlbumsList')).toExist();
  });
});
