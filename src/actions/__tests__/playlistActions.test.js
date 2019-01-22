import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../playlistActions';
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
describe('Playlist Actions', () => {
  function mockRequest(response = { status: 200 }) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches getPlaylist action with correct payload', async () => {
    const playlist = { playlist: { id: 1, name: 'a' } };
    mockRequest(playlist);
    const expectedActions = [{ type: types.GET_PLAYLIST, payload: playlist }];
    await store.dispatch(actions.getPlaylist(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getPlaylistsTracks action with correct payload', async () => {
    const tracks = { items: [{ id: 1, name: 'b' }, { id: 2, name: 'c' }] };
    mockRequest(tracks);
    const expectedActions = [
      { type: types.GET_PLAYLIST_TRACKS, payload: tracks }
    ];
    await store.dispatch(actions.getPlaylistsTracks(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
