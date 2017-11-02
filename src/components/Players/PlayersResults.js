import React from 'react';
import PropTypes from 'prop-types';
import PlayerItem from './PlayerItem';
import './Players.css';

const PlayersResults = ({ isLoadingData, isLoadingError, playersData }) => (
  <div className="Player-results">
    { isLoadingData && 'Loading...'}
    { isLoadingError && 'An Error Occurred While Getting the Data!'}
    {
      playersData.map(playerData => (
        <div key={playerData.id}>
          <PlayerItem playerData={playerData} />
        </div>
      )) }
  </div>
);

PlayersResults.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  playersData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlayersResults;
