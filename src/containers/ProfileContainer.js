import React, { Component } from 'react';
import { getPlayer } from '../utils/Api';
import Profile from "../components/Profile/Profile";

export default class ProfileContainer extends Component {
  state = {
    playerData: null,
  };

  componentDidMount() {
    getPlayer(this.props.match.params.id)
      .then((response) => {
        this.setState(() => ({
          playerData: response,
        }));
      }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        { this.state.playerData && <Profile playerData={this.state.playerData} /> }
      </div>
    )
  }
}
