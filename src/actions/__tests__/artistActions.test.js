import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../artistActions';
import * as types from '../actionTypes';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

beforeEach(() => {
  moxios.install();
  store.clearActions();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Artist Actions', () => {
  function mockRequest(response) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }

  it('Dispatches the getArtist action with correct payload', async () => {
    const artist = { id: 1, title: 'a' };
    mockRequest(artist);
    const expectedActions = [{ type: types.GET_ARTIST, payload: artist }];
    await store.dispatch(actions.getArtist(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the getArtistsAlbums action with correct payload', async () => {
    const albums = { items: [{ id: 2, title: 'b' }, { id: 3, title: 'c' }] };
    mockRequest(albums);
    const expectedActions = [
      { type: types.GET_ARTISTS_ALBUM, payload: albums }
    ];
    await store.dispatch(actions.getArtistsAlbums(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the getArtistsTopTracks action with correct payload', async () => {
    const tracks = { tracks: [{ id: 4, title: 'd' }, { id: 5, title: 'e' }] };
    mockRequest(tracks);
    const expectedActions = [
      { type: types.GET_ARTISTS_TOP_TRACKS, payload: tracks.tracks }
    ];
    await store.dispatch(actions.getArtistsTopTracks(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches the getArtistsRelatedArtists action with correct payload', async () => {
    const artist = { id: 5, title: 'e' };
    mockRequest(artist);
    const expectedActions = [
      { type: types.GET_ARTIST_RELATED_ARTISTS, payload: artist }
    ];
    await store.dispatch(actions.getArtistsRelatedArtists(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
