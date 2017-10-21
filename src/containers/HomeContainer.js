import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import { playersActions } from '../actions';

const mapStateToProps = ({ players }) => players;
const mapDispatchToProps = dispatch => ({
  onSearchStringChanged: e => playersActions.onSearchStringChanged(dispatch, e.target.value),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
