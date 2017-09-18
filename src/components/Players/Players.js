import React from 'react';
import PlayersResults from "./PlayersResults";

const Players = ({ isLoadingData, playersData }) => (
  <div>
    <div className="Players-header">
      <PlayersResults
        isLoadingData={isLoadingData}
        playersData={playersData}
      />
    </div>
  </div>
);

export default Players;
