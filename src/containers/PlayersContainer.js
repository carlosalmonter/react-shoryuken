import React, { Component } from 'react';
import Players from '../components/Players/Players';
import { searchPlayer } from '../utils/Api';

export default class PlayersContainer extends Component {
  state = {
    isLoadingData: true,
    searchData: [],
  };

  componentDidMount() {
    searchPlayer()
      .then((response) => {
        this.setState(() => ({
          isLoadingData: false,
          searchData: response,
        }));
      }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Players
        isLoadingData={this.state.isLoadingData}
        playersData={this.state.searchData}
      />
    );
  }
}
