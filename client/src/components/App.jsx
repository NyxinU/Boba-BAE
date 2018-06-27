import "../App.css";
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./home/Home";
import StoreShowContainer from './store/StoreShowContainer';

const App = () => (
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path="/biz/:businessId" component={StoreShowContainer} />
    </Switch>
);

export default App;
