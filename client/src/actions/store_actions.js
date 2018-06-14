import * as StoreApiUtil from '../utils/store_api_utils';

export const RECEIVE_STORE = 'RECEIVE_STORE';
// export const RECEIVE_STORE_ERRORS = 'RECEIVE_STORE_ERRORS';

export const receiveStore = store => ({
  type: RECEIVE_STORE,
  store,
});

export const fetchStore = store => dispatch => (StoreApiUtil.fetchStore(store)
  .then(store => (dispatch(receiveStore(store.data))))
);
