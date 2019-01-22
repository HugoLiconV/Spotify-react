import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../searchActions';
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
describe('Search Actions', () => {
  function mockRequest(response = { status: 200 }) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches search action with correct payload', async () => {
    const res = { id: 1, name: 'a' };
    mockRequest(res);
    const expectedActions = [{ type: types.SEARCH, payload: res }];
    await store.dispatch(actions.search('query', ['artist'], 20, 0));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
