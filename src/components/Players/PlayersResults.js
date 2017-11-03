import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';
import PlayerItem from './PlayerItem';
import './Players.css';
import colors from '../../config/colors';

const PlayersResults = ({ isLoadingData, isLoadingError, playersData }) => (
  <div className="Player-results">
    { isLoadingData && <CircularProgress color={colors.BLACK} />}
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
