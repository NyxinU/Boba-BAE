import "../App.css";
import React from 'react';
import styled from "styled-components"
import { Route, Switch } from 'react-router-dom';

import Header from "./header/Header";
import Home from "./home/Home";
import StoreShowContainer from './store/StoreShowContainer';
import StoreSearchResultsContainer from "./store/StoreSearchResultsContainer";

const StyledApp = styled.div`
  margin: auto 5vw;
`;

const App = () => (
  <div>
    <Header />
    <Switch>
      <StyledApp>
        <Route exact path ="/" component={Home} />
        <Route exact path="/biz/:businessId" component={StoreShowContainer} />
        <Route exact path="/search" component={StoreSearchResultsContainer} />
      </StyledApp>
    </Switch>
  </div>
);

export default App;
