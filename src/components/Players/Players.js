import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayersResults from './PlayersResults';
import PlayerSearch from './PlayerSearch';
import config from '../../config/config';

class Players extends Component {
  static defaultProps = {
    playerSearchQuery: config.EMPTY_STRING,
    playersData: [],
  };
  static propTypes = {
    playerSearchQuery: PropTypes.string,
    isLoadingData: PropTypes.bool.isRequired,
    isLoadingError: PropTypes.bool.isRequired,
    playersData: PropTypes.arrayOf(PropTypes.object),
    fetchData: PropTypes.func.isRequired,
    onPlayerInputChange: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (this.props.playerSearchQuery !== config.EMPTY_STRING) {
      this.props.fetchData(this.props.playerSearchQuery);
    }
  }

  handlePlayerInputChange = (e) => {
    const searchQuery = e.target.value;
    this.props.onPlayerInputChange(searchQuery);

    if (searchQuery.length > config.MINIMUM_SEARCH_STRING_LENGTH) {
      this.props.fetchData(searchQuery);
    }
  };

  render() {
    const { isLoadingData, playersData, isLoadingError } = this.props;
    return (
      <div>
        <div className="Players-header">
          <PlayerSearch
            onPlayerInputChange={this.handlePlayerInputChange}
          />
          <PlayersResults
            isLoadingData={isLoadingData}
            isLoadingError={isLoadingError}
            playersData={playersData}
          />
        </div>
      </div>
    );
  }
}

export default Players;
