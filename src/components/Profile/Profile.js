import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileDetails from './ProfileDetails';
import { getPlayer } from '../../utils/Api';
import config from '../../config/config';

export default class Profile extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    playerData: null,
    characterBackground: '',
  };

  componentDidMount() {
    getPlayer(this.props.match.params.id)
      .then((response) => {
        this.setState(() => ({
          playerData: response,
          characterBackground: this.getCharacterBackground(response),
        }));
      }).catch((error) => {
        console.log(error);
      });
  }
  getCharacterBackground = (playerData) => {
    const regex = new RegExp(`${playerData.mainGame}_`);
    const characterName = playerData.rankings[playerData.mainGame].main[0].replace(regex, '');
    return `${config.CPT_BACKGROUND_CHARACTER_IMAGE_URL}${characterName.toLowerCase()}.jpg`;
  };

  render() {
    return (
      <div>
        {
          this.state.playerData &&
          <ProfileDetails
            playerData={this.state.playerData}
            characterBackgroundUrl={this.state.characterBackground}
          />
        }
      </div>
    );
  }
}
