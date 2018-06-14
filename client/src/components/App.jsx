import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import StoreShowContainer from './store/store_show_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/biz/:businessId" component={StoreShowContainer} />
    </Switch>
  </div>
);

export default App;
