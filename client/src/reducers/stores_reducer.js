import merge from 'lodash/merge';

import { RECEIVE_STORE } from '../actions/store_actions';

const storesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newStore = {};
  switch (action.type) {
    case RECEIVE_STORE:
      newStore = { [action.store.id]: action.store };
      return merge({}, newStore);
    default:
      return state;
  }
};

export default storesReducer;
