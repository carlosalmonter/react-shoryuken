import { connect } from 'react-redux';
import Home from '../components/Home/Home';

import { playersActions } from '../actions';

const mapStateToProps = ({ players }) => players;
const mapDispatchToProps = dispatch => ({
  fetchData: searchString => playersActions.fetchData(dispatch, searchString),
  onPlayerInputChange: searchString => dispatch(playersActions.searchDataUpdated(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
