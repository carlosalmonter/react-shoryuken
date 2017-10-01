import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';
import PlayersContainer from '../containers/PlayersContainer';
import ProfileContainer from '../containers/ProfileContainer';

const App = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/players" component={PlayersContainer} />
      <Route exact path="/players/:id" component={ProfileContainer} />
    </Switch>
  </Main>
);
export default App;
