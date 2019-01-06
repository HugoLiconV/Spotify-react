import React from 'react';
import { PlayingNow } from './PlayingNow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<PlayingNow/> component', () => {
  let wrapper;
  let currentlyPlaying;
  let player;
  let props;
  beforeEach(() => {
    player = {};
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
    props = {
      currentlyPlaying,
      player,
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
    console.log(wrapper.debug());
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
