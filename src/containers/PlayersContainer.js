import React, { Component } from 'react';
import Players from '../components/Players/Players';
import { searchPlayer } from '../utils/Api';

export default class PlayersContainer extends Component {
  state = {
    isLoadingData: false,
    searchString: '',
    searchData: [],
  };

  handlePlayerInputChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  handleSearchClicked = (e) => {
    this.setState({
      isLoadingData: true,
      searchData: [],
    });

    searchPlayer(this.state.searchString)
      .then((response) => {
        this.setState(() => ({
          isLoadingData: false,
          searchData: response,
        }));
      }).catch((error) => {
      console.log(error);
    });
  };


  handleViewProfile = (e) => {
    console.log('view profile');
  };

  render() {
    return (
      <Players
        isLoadingData={this.state.isLoadingData}
        playersData={this.state.searchData}
        onPlayerInputChange={this.handlePlayerInputChange}
        onSearchClicked={this.handleSearchClicked}
        onViewProfile={this.handleViewProfile}
      />
    );
  }
}
