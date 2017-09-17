import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';

const App = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  </Main>
);
export default App;
