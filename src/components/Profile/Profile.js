import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';
import ProfileDetails from './ProfileDetails';
import config from '../../config/config';
import colors from '../../config/colors';

export default class Profile extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
    fetchProfileData: PropTypes.func.isRequired,
    profileData: PropTypes.shape().isRequired,
    isLoadingData: PropTypes.bool.isRequired,
    isLoadingError: PropTypes.bool.isRequired,
  };

  state = {
    characterBackground: '',
  };

  componentDidMount() {
    this.props.fetchProfileData(this.props.match.params.id)
      .then(() => {
        this.setState(() => ({
          characterBackground: this.getCharacterBackground(this.props.profileData),
        }));
      });
  }

  /**
   * Returns the player's main character background url
   * @param playerData
   * @returns {string}
   */
  getCharacterBackground = (playerData) => {
    const regex = new RegExp(`${playerData.mainGame}_`);
    const characterName = playerData.rankings[playerData.mainGame].main[0].replace(regex, '');
    return `${config.CPT_BACKGROUND_CHARACTER_IMAGE_URL}${characterName.toLowerCase()}.jpg`;
  };

  render() {
    const { isLoadingData, profileData, isLoadingError } = this.props;
    return (
      <div>
        { isLoadingData && <CircularProgress color={colors.BLACK} />}
        { isLoadingError && config.LOADING_ERROR_MESSAGE}
        {
          !isLoadingData &&
          <ProfileDetails
            playerData={profileData}
            characterBackgroundUrl={this.state.characterBackground}
          />
        }
      </div>
    );
  }
}
