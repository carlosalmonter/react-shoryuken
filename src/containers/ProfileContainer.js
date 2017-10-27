import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPlayer } from '../utils/Api';
import Profile from '../components/Profile/Profile';

export default class ProfileContainer extends Component {
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
    return `https://capcomprotour.com/wp-content/themes/foundation/images/bg-player-${characterName.toLowerCase()}.jpg`;
  };

  render() {
    return (
      <div>
        {
          this.state.playerData &&
          <Profile
            playerData={this.state.playerData}
            characterBackgroundUrl={this.state.characterBackground}
          />
        }
      </div>
    );
  }
}
