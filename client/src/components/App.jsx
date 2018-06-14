import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import StoreShowContainer from './store/StoreShowContainer';

const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const App = () => (
  <StyledApp>
    <Switch>
      <Route exact path="/biz/:businessId" component={StoreShowContainer} />
    </Switch>
  </StyledApp>
);

export default App;
