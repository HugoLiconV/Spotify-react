import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../personalizationActions';
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
describe('Personalization Actions', () => {
  function mockRequest(response) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches getUsersTopArtists action with correct payload', async () => {
    const artists = [{ id: 1, title: 'a' }, { id: 2, title: 'b' }];
    mockRequest(artists);
    const expectedActions = [
      { type: types.GET_USERS_TOP_ARTISTS, payload: artists }
    ];
    await store.dispatch(actions.getUsersTopArtists());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getUsersTopTracks action with correct payload', async () => {
    const tracks = [{ id: 2, title: 'b' }, { id: 3, title: 'c' }];
    mockRequest(tracks);
    const expectedActions = [
      { type: types.GET_USERS_TOP_TRACKS, payload: tracks }
    ];
    await store.dispatch(actions.getUsersTopTracks());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
