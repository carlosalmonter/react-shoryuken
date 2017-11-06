import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';
import PlayersContainer from '../containers/PlayersContainer';
import RankingContainer from '../containers/RankingContainer';
import ProfileContainer from '../containers/ProfileContainer';
import store from '../store/createStore';

const App = () => (
  <Provider store={store}>
    <Main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/players" component={PlayersContainer} />
        <Route exact path="/players/:id" component={ProfileContainer} />
        <Route exact path="/rankings" component={RankingContainer} />
      </Switch>
    </Main>
  </Provider>
);

export default App;
