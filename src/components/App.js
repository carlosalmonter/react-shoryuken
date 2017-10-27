import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import reducers from '../reducers';
import Main from './Main/Main';
import HomeContainer from '../containers/HomeContainer';
import PlayersContainer from '../containers/PlayersContainer';
import ProfileContainer from '../containers/ProfileContainer';

const store = createStore(
  reducers,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

const App = () => (
  <Provider store={store}>
    <Main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/players" component={PlayersContainer} />
        <Route exact path="/players/:id" component={ProfileContainer} />
      </Switch>
    </Main>
  </Provider>
);

export default App;
