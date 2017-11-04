import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';
import PlayerItem from './PlayerItem';
import './Players.css';
import colors from '../../config/colors';
import config from '../../config/config';

const PlayersResults = ({ isLoadingData, isLoadingError, playersData }) => (
  <div className="player__results">
    { isLoadingData && <CircularProgress color={colors.BLACK} />}
    { isLoadingError && config.LOADING_ERROR_MESSAGE}
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
