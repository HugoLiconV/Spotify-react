import reducer from '../playlist';
import * as types from '../../actions/actionTypes';

describe('Playlist reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      playlist: {},
      playlistsTracks: {}
    });
  });

  it('should handle GET_PLAYLIST', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_PLAYLIST,
          payload: {
            collaborative: false,
            description: 'A playlist for testing pourposes',
            id: '3cEYpjA9oz9GiPac4AsH4n',
            images: [
              {
                height: null,
                url:
                  'https://pl.scdn.co/images/pl/default/15e1e401aca06139b92bb116834a8324d03d4fd1',
                width: null
              }
            ],
            name: 'Spotify Web API Testing playlist',
            type: 'playlist'
          }
        }
      )
    ).toEqual({
      playlist: {
        collaborative: false,
        description: 'A playlist for testing pourposes',
        id: '3cEYpjA9oz9GiPac4AsH4n',
        images: [
          {
            height: null,
            url:
              'https://pl.scdn.co/images/pl/default/15e1e401aca06139b92bb116834a8324d03d4fd1',
            width: null
          }
        ],
        name: 'Spotify Web API Testing playlist',
        type: 'playlist'
      }
    });
  });

  it('should handle GET_PLAYLIST_TRACKS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_PLAYLIST_TRACKS,
          payload: {
            items: [],
            limit: 10,
            next: null,
            offset: 5,
            total: 5
          }
        }
      )
    ).toEqual({
      playlistsTracks: {
        items: [],
        limit: 10,
        next: null,
        offset: 5,
        total: 5
      }
    });
  });
});
