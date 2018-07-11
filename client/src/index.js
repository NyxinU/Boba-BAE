import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import * as StoreApi from './utils/store_api_utils';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStores = StoreApi.fetchStores;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
registerServiceWorker(); 
