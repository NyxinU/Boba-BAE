import * as StoreApiUtil from '../utils/store_api_utils';

export const RECEIVE_STORE = 'RECEIVE_STORE';
export const RECEIVE_STORES = 'RECEIVE_STORES';
// export const RECEIVE_STORE_ERRORS = 'RECEIVE_STORE_ERRORS';

export const receiveStore = store => ({
  type: RECEIVE_STORE,
  store,
});

export const receiveStores = stores => ({
  type: RECEIVE_STORES,
  stores,
});

export const fetchStore = store => dispatch => (StoreApiUtil.fetchStore(store)
  .then(store => (dispatch(receiveStore(store.data))))
);

export const fetchStores = (term, location) => dispatch => (StoreApiUtil.fetchStores(term, location)
  .then(stores => (dispatch(receiveStores(stores.data))))
);
