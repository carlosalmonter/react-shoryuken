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
    let searchQuery = e.target.value;
    if(searchQuery.length > 2) {
      this.setState({
        isLoadingData: true,
        searchData: [],
      });

      searchPlayer(searchQuery)
        .then((response) => {
          this.setState(() => ({
            isLoadingData: false,
            searchData: response,
          }));
        }).catch((error) => {
        console.log(error);
      });
    }
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
