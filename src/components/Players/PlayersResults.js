import React from 'react';
import PropTypes from 'prop-types';
import PlayerItem from './PlayerItem';
import './Players.css';

const PlayersResults = ({ isLoadingData, playersData, onViewProfile }) => (
  <div className="Player-results">
    { isLoadingData && 'Loading...'}
    {
      playersData.map(playerData => (
        <div key={playerData.id}>
          <PlayerItem playerData={playerData} onViewProfile={onViewProfile} />
        </div>
      )) }
  </div>
);

PlayersResults.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  playersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onViewProfile: PropTypes.func.isRequired,
};

export default PlayersResults;
