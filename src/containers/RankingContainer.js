import { connect } from 'react-redux';
import Ranking from '../components/Ranking/Ranking';

import { rankingActions } from '../actions';

const mapStateToProps = ({ ranking }) => ranking;
const mapDispatchToProps = dispatch => ({
  fetchCPTRankingData: () => rankingActions.fetchCPTRankingData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
