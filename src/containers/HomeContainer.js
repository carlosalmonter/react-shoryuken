import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import { playersActions } from '../actions';

const mapStateToProps = ({ players }) => players;
const mapDispatchToProps = dispatch => ({
  onSearchStringChanged: queryString => playersActions.onSearchStringChanged(dispatch, queryString),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
