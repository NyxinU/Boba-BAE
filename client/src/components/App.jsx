import "../App.css";
import React from 'react';
import styled from "styled-components"
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from "./header/HeaderContainer";
import Home from "./home/Home";
import StoreShowContainer from './store/StoreShowContainer';

const StyledApp = styled.div`
  margin: auto 5vw;
`;

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <StyledApp>
        <Route exact path ="/" component={Home} />
        <Route exact path="/biz/:businessId" component={StoreShowContainer} />
      </StyledApp>
    </Switch>
  </div>
);

export default App;
