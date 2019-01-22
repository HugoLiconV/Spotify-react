import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../userActions';
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
describe('User Actions', () => {
  function mockRequest(response = { status: 200 }) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }
  it('Dispatches getCurrentUser action with correct payload', async () => {
    const user = { id: 1, name: 'a' };
    mockRequest(user);
    const expectedActions = [{ type: types.GET_CURRENT_USER, payload: user }];
    await store.dispatch(actions.getCurrentUser());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
