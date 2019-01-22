import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../playerActions';
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

function mockRequest(response = { status: 200 }) {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response
    });
  });
}
describe('Player Actions', () => {
  it('Dispatches getRecentlyPlayed action with correct payload', async () => {
    const items = { items: [{ id: 1, name: 'a' }, { id: 2, name: 'b' }] };
    mockRequest(items);
    const expectedActions = [
      { type: types.GET_RECENTLY_PLAYED, payload: items }
    ];
    await store.dispatch(actions.getRecentlyPlayed());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getPlayer action with correct payload', async () => {
    const player = {
      device: {
        id: 'c3dbf2b97ebfc7207341caddeba8e1c46804661f',
        is_active: true,
        is_private_session: false,
        is_restricted: false,
        name: 'mcbk',
        type: 'Computer',
        volume_percent: 80
      },
      shuffle_state: false,
      repeat_state: 'context',
      timestamp: 1548185368604,
      context: null,
      progress_ms: 20897,
      item: { id: 1, name: 'a' }
    };
    mockRequest(player);
    const expectedActions = [{ type: types.GET_PLAYER, payload: player }];
    await store.dispatch(actions.getPlayer());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getDevices action with correct payload', async () => {
    const devices = { devices: [{ id: 2, title: 'b' }, { id: 3, title: 'c' }] };
    mockRequest(devices);
    const expectedActions = [
      { type: types.GET_DEVICES, payload: devices.devices }
    ];
    await store.dispatch(actions.getDevices());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches getCurrentlyPlaying action with correct payload', async () => {
    const track = { id: 2, title: 'b' };
    mockRequest(track);
    const expectedActions = [
      { type: types.GET_CURRENT_PLAYING, payload: track }
    ];
    await store.dispatch(actions.getCurrentlyPlaying());
    expect(store.getActions()).toEqual(expectedActions);
  });

  // it('Dispatches nextSong action with correct payload', async () => {
  //   mockRequest();
  //   const expectedActions = [{ type: types.NEXT_SONG }];
  //   await store.dispatch(actions.nextSong());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('Dispatches previousSong action with correct payload', async () => {
  //   mockRequest();
  //   const expectedActions = [{ type: types.PREVIOUS_SONG }];
  //   await store.dispatch(actions.previousSong());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('Dispatches pause action with correct payload', async () => {
  //   mockRequest();
  //   const expectedActions = [{ type: types.PAUSE }];
  //   await store.dispatch(actions.pause());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('Dispatches play action with correct payload', async () => {
  //   mockRequest();
  //   const expectedActions = [{ type: types.PLAY }];
  //   await store.dispatch(actions.play());
  //   expect(store.getActions()).toEqual(expectedActions);
  // });

  // it('Dispatches seek action with correct payload', async () => {
  //   mockRequest();
  //   const expectedActions = [{ type: types.SEEK }];
  //   await store.dispatch(actions.seek(200));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});
