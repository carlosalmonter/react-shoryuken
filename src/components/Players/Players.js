import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayersResults from './PlayersResults';
import PlayerSearch from './PlayerSearch';

class Players extends Component {
  static propTypes = {
    isLoadingData: PropTypes.bool.isRequired,
    playersData: PropTypes.array.isRequired,
    fetchData: PropTypes.func.isRequired,
    onPlayerInputChange: PropTypes.func.isRequired,
  };

  handlePlayerInputChange = (e) => {
    const searchQuery = e.target.value;
    this.props.onPlayerInputChange(searchQuery);

    if (searchQuery.length > 2) {
      this.props.fetchData(searchQuery);
    }
  };

  render() {
    const { isLoadingData, playersData } = this.props;
    console.log(this.props.playersData)
    console.log(this.props.isLoadingData)
    return (
      <div>
        <div className="Players-header">
          <PlayerSearch
            onPlayerInputChange={this.handlePlayerInputChange}
          />
          <PlayersResults
            isLoadingData={isLoadingData}
            playersData={playersData}
          />
        </div>
      </div>
    );
  }
}

export default Players;
