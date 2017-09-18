import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';
import PlayersContainer from "../containers/PlayersContainer";

const App = () => (
  <Main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/players" component={PlayersContainer} />
      </Switch>
  </Main>
);
export default App;
