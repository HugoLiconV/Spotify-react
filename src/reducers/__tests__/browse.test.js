import reducer from '../browse';
import * as types from '../../actions/actionTypes';

describe('Browse reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      category: {},
      categorysPlaylists: [],
      categories: [],
      featuredPlaylists: {},
      newReleases: {}
    });
  });

  it('should handle GET_CATEGORY', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_CATEGORY,
          payload: { id: 1, name: 'a' }
        }
      )
    ).toEqual({
      category: { id: 1, name: 'a' }
    });
  });

  it('should handle GET_CATEGORYS_PLAYLISTS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_CATEGORYS_PLAYLISTS,
          payload: {
            playlists: { id: 1, name: 'a' }
          }
        }
      )
    ).toEqual({
      categorysPlaylists: {
        playlists: { id: 1, name: 'a' }
      }
    });
  });

  it('should handle GET_CATEGORIES', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_CATEGORIES,
          payload: {
            categories: {
              items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
            }
          }
        }
      )
    ).toEqual({
      categories: {
        categories: {
          items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
        }
      }
    });
  });

  it('should handle GET_FEATUREDPLAYLISTS', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_FEATUREDPLAYLISTS,
          payload: {
            message: "Editor's picks",
            playlists: { items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] }
          }
        }
      )
    ).toEqual({
      featuredPlaylists: {
        message: "Editor's picks",
        playlists: { items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] }
      }
    });
  });

  it('should handle GET_NEW_RELEASES', () => {
    expect(
      reducer(
        {},
        {
          type: types.GET_NEW_RELEASES,
          payload: {
            albums: { items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] }
          }
        }
      )
    ).toEqual({
      newReleases: {
        albums: { items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] }
      }
    });
  });
});
