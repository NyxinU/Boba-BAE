import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';
import * as StoreApi from './actions/store_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStores = StoreApi.fetchStores;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
registerServiceWorker(); 
