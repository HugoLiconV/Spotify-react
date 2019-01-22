import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../browseActions';
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
describe('Browse Actions', () => {
  function mockRequest(response) {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });
  }

  test('Dispatches the getCategory action with correct payload', async () => {
    const category = { id: 1, title: 'a' };
    mockRequest(category);
    const expectedActions = [{ type: types.GET_CATEGORY, payload: category }];
    await store.dispatch(actions.getCategory(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the getCategorysPlaylists action with correct payload', async () => {
    const playlists = { playlists: [{ title: 'a' }, { title: 'b' }] };
    mockRequest(playlists);
    const expectedActions = [
      { type: types.GET_CATEGORYS_PLAYLISTS, payload: playlists }
    ];
    await store.dispatch(actions.getCategorysPlaylists(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the getCategories action with correct payload', async () => {
    const categories = { categories: [{ title: 'a' }, { title: 'b' }] };
    mockRequest(categories);
    const expectedActions = [
      { type: types.GET_CATEGORIES, payload: categories }
    ];

    await store.dispatch(actions.getCategories());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the getFeaturedPlaylists action with correct payload', async () => {
    const playlists = { playlists: [{ title: 'a' }, { title: 'b' }] };
    mockRequest(playlists);
    const expectedActions = [
      { type: types.GET_FEATUREDPLAYLISTS, payload: playlists }
    ];

    await store.dispatch(actions.getFeaturedPlaylists());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the getNewReleases action with correct payload', async () => {
    const getNewReleases = { getNewReleases: [{ title: 'a' }, { title: 'b' }] };
    mockRequest(getNewReleases);
    const expectedActions = [
      { type: types.GET_NEW_RELEASES, payload: getNewReleases }
    ];
    await store.dispatch(actions.getNewReleases());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
