import React from 'react';
import PlayerItem from './PlayerItem';
import './Players.css';

const PlayersResults = ({ isLoadingData, playersData, onViewProfile }) => (
  <div className="Player-results">
    { console.log(isLoadingData) }
    { isLoadingData && 'Loading...'}
    {
      playersData.map(playerData => (
        <div key={playerData.id}>
          <PlayerItem playerData={playerData} onViewProfile={onViewProfile} />
        </div>
      )) }
  </div>
);

export default PlayersResults;
