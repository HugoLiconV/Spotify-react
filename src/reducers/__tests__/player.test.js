import reducer from '../player';
import * as types from '../../actions/actionTypes';

describe('Player reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      recentlyPlayed: {},
      player: {},
      devices: [],
      currentlyPlaying: {}
    });
  });

  it('should handle GET_RECENTLY_PLAYED', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_RECENTLY_PLAYED,
          payload: {
            items: {
              tracks: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }]
            }
          }
        }
      )
    ).toEqual({
      recentlyPlayed: {
        items: {
          tracks: [{ id: 1, title: 'a' }, { id: 2, title: 'b' }]
        }
      }
    });
  });

  it('should handle GET_PLAYER', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_PLAYER,
          payload: {
            device: {
              id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
              is_active: true,
              is_private_session: false,
              is_restricted: false,
              name: 'mcbk',
              type: 'Computer',
              volume_percent: 80
            },
            shuffle_state: false,
            repeat_state: 'context',
            timestamp: 1548131483480,
            context: null,
            progress_ms: 16009,
            item: { id: 1, name: 'a' },
            currently_playing_type: 'track',
            is_playing: true
          }
        }
      )
    ).toEqual({
      player: {
        device: {
          id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
          is_active: true,
          is_private_session: false,
          is_restricted: false,
          name: 'mcbk',
          type: 'Computer',
          volume_percent: 80
        },
        shuffle_state: false,
        repeat_state: 'context',
        timestamp: 1548131483480,
        context: null,
        progress_ms: 16009,
        item: { id: 1, name: 'a' },
        currently_playing_type: 'track',
        is_playing: true
      }
    });
  });

  it('should handle GET_DEVICES', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_DEVICES,
          payload: {
            devices: [
              {
                id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
                is_active: true,
                is_private_session: false,
                is_restricted: false,
                name: 'mcbk',
                type: 'Computer',
                volume_percent: 80
              }
            ]
          }
        }
      )
    ).toEqual({
      devices: {
        devices: [
          {
            id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
            is_active: true,
            is_private_session: false,
            is_restricted: false,
            name: 'mcbk',
            type: 'Computer',
            volume_percent: 80
          }
        ]
      }
    });
  });

  it('should handle GET_CURRENT_PLAYING', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_CURRENT_PLAYING,
          payload: {
            timestamp: 1548131486611,
            context: null,
            progress_ms: 17245,
            item: { id: 1, name: 'a' },
            currently_playing_type: 'track',
            is_playing: false
          }
        }
      )
    ).toEqual({
      currentlyPlaying: {
        timestamp: 1548131486611,
        context: null,
        progress_ms: 17245,
        item: { id: 1, name: 'a' },
        currently_playing_type: 'track',
        is_playing: false
      }
    });
  });
});
