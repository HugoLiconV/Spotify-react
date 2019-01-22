import configureStore from 'redux-mock-store';
import * as actions from '../notificationActions';
import * as types from '../actionTypes';

const mockStore = configureStore();
const store = mockStore();

beforeEach(() => {
  store.clearActions();
});
describe('Notification Actions', () => {
  test('Dispatches the showNotification action with correct payload', () => {
    const status = 404;
    const message = 'error 404';
    const type = 'error';

    const expectedActions = [
      { type: types.SHOW_NOTIFICATION, payload: { status, message, type } }
    ];
    store.dispatch(actions.showNotification(status, message, type));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the hideNotification action with correct payload', () => {
    const show = false;

    const expectedActions = [
      {
        type: types.HIDE_NOTIFICATION,
        payload: { show }
      }
    ];
    store.dispatch(actions.hideNotification());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
