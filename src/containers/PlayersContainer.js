import { connect } from 'react-redux';
import Players from '../components/Players/Players';

import { playersActions } from '../actions';

const mapStateToProps = ({ players }) => players;
const mapDispatchToProps = dispatch => ({
  fetchData: searchString => playersActions.fetchData(dispatch, searchString),
  onPlayerInputChange: searchString => dispatch(playersActions.searchDataUpdated(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
