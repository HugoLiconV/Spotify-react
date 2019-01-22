// import mockAxios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../albumActions';
import * as types from '../actionTypes';
import moxios from 'moxios';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe('Album Actions', () => {
  beforeEach(() => {
    // Runs before each test in the suite
    // store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Dispatches the correct action and payload', () => {
    const albums = { albums: [{ title: 'a' }, { title: 'b' }] };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: albums
      });
    });
    const expectedActions = [{ type: types.GET_ALBUM, payload: albums }];
    const store = mockStore({ albums: {} });
    return store.dispatch(actions.getAlbum(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
