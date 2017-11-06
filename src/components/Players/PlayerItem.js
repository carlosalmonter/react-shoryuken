import React from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import './Players.css';
import config from '../../config/config';

const PlayerItem = ({ playerData }) => {
  const playerProfileImage = `${config.PLAYER_PROFILE_IMAGE_PATH}${playerData.name.replace(/\\s+/, '_').toLowerCase()}`;

  const profileImageStyle = {
    backgroundImage: `url(${playerProfileImage}.jpg), url(${playerProfileImage}.png)`,
  };

  return (
    <div
      className="player__item-container"
    >
      <Paper className="player__item">
        <Paper
          className="player__image"
          circle
          style={profileImageStyle}
        />
        <div>Name: { playerData.name }</div>
        <div>Country: { playerData.country }</div>
        <div>
          <Link to={`/players/${playerData.id}`}>
            <RaisedButton label="View Profile" />
          </Link>
        </div>
      </Paper>
    </div>
  );
};

PlayerItem.propTypes = {
  // TODO: add shape
  playerData: PropTypes.shape().isRequired,
};

export default PlayerItem;
