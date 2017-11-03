import { connect } from 'react-redux';
import Profile from '../components/Profile/Profile';

import { profileActions } from '../actions';

const mapStateToProps = ({ profile }) => profile;
const mapDispatchToProps = dispatch => ({
  fetchProfileData: id => profileActions.fetchProfileData(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
