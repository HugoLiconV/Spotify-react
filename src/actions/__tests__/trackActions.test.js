import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../trackActions';
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
describe('Track Actions', () => {
  function mockRequest(response) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches getTrack action with correct payload', async () => {
    const track = { id: 1, title: 'a' };
    mockRequest(track);
    const expectedActions = [{ type: types.GET_TRACK, payload: track }];
    await store.dispatch(actions.getTrack(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getTracks action with correct payload', async () => {
    const tracks = [{ id: 2, title: 'b' }, { id: 3, title: 'c' }];
    mockRequest(tracks);
    const expectedActions = [{ type: types.GET_TRACKS, payload: tracks }];
    await store.dispatch(actions.getTracks([1, 2, 3]));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
