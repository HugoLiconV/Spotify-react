import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../albumActions';
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

describe('Album Actions', () => {
  function mockRequest(response) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches getAlbum action with correct payload', async () => {
    const album = { id: 1, title: 'a' };
    mockRequest(album);
    const expectedActions = [{ type: types.GET_ALBUM, payload: album }];
    await store.dispatch(actions.getAlbum(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getAlbumsTracks action with correct payload', async () => {
    const tracks = { id: 2, title: 'b' };
    mockRequest(tracks);
    const expectedActions = [{ type: types.GET_ALBUM_TRACKS, payload: tracks }];
    await store.dispatch(actions.getAlbumsTracks(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
