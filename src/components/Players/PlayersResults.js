import React from 'react';
import PropTypes from 'prop-types';
import PlayerItem from './PlayerItem';
import './Players.css';
import withLoading from '../HOC/withLoading';

const PlayersResults = ({ playersData }) => (
  <div className="player__results">
    {
      playersData.map(playerData => (
        <div key={playerData.id}>
          <PlayerItem playerData={playerData} />
        </div>
      )) }
  </div>
);

PlayersResults.propTypes = {
  playersData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withLoading(PlayersResults);
