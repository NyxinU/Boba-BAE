import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as store from './utils/store_api_utils';

window.fetchStore = store.fetchStore;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
