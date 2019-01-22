import configureStore from 'redux-mock-store';
import * as actions from '../tokenActions';
import * as types from '../actionTypes';

const mockStore = configureStore();
const store = mockStore();

beforeEach(() => {
  store.clearActions();
});
describe('Token Actions', () => {
  test('Dispatches saveToken action with correct payload', () => {
    const token = 'abc123';
    const expectedActions = [{ type: types.SAVE_TOKEN, token }];
    const store = mockStore();
    store.dispatch(actions.saveToken(token));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches deleteToken action with correct payload', () => {
    const expectedActions = [{ type: types.DELETE_TOKEN, token: undefined }];
    const store = mockStore();
    store.dispatch(actions.deleteToken());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
