import React from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import './Players.css';

const PlayerItem = ({ playerData, onViewProfile }) => (
  <div
    className="Player-item-container"
  >
    <Paper className="Player-item">
      <Paper
        className="Player-image"
        circle
        style={
          {
            backgroundImage: `url(https://s3.amazonaws.com/srkranking/images/${playerData.name.replace(/\s+/, '_').toLowerCase()}.jpg), url(https://s3.amazonaws.com/srkranking/images/${playerData.name.replace(/\s+/, '_').toLowerCase()}.png), url(https://capcomprotour.com/wp-content/uploads/2014/02/capcom-pt-logo.png)`,
          }
        }
      />
      <div>Name: { playerData.name }</div>
      <div>Country: { playerData.country }</div>
      <div>
        <Link to={`/players/${playerData.id}`}>
          <RaisedButton label="View Profile" onClick={onViewProfile} />
        </Link>
      </div>
    </Paper>
  </div>
);

PlayerItem.propTypes = {
  playerData: PropTypes.shape().isRequired,
  onViewProfile: PropTypes.func.isRequired,
};

export default PlayerItem;
