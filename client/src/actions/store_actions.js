import * as StoreApiUtil from '../util/store_api_util';

export const RECEIVE_STORE = 'RECEIVE_STORE';

export const receiveStore = store => ({
  type: RECEIVE_STORE,
  store,
});

export const fetchStore = store => dispatch => (
  StoreApiUtil.fetchStore(store).then(store => (
    dispatch(receiveStore(store.data))
  ))
);