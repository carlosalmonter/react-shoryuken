import { createStore, compose } from 'redux';
import reducers from '../reducers';

const store = createStore(
  reducers,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
);

export default store;
