import React from 'react';
import PlayersResults from './PlayersResults';
import PlayerSearch from './PlayerSearch';

const Players = ({ isLoadingData, playersData, onPlayerInputChange, onSearchClicked, onViewProfile }) => (
  <div>
    <div className="Players-header">
      <PlayerSearch
        onPlayerInputChange={onPlayerInputChange}
        onSearchClicked={onSearchClicked}
      />
      <PlayersResults
        isLoadingData={isLoadingData}
        playersData={playersData}
        onViewProfile={onViewProfile}
      />
    </div>
  </div>
);

export default Players;
