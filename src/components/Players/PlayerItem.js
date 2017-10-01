import React  from 'react';
import { Paper, RaisedButton} from "material-ui";
import './Players.css';
import {Link} from "react-router-dom";

const PlayerItem = ({ playerData, onViewProfile }) => (
  <div className="Player-item-container">
  <Paper className="Player-item">
    <div>Name: {playerData.name}</div>
    <div>Country: {playerData.country}</div>
    <div>
      <Link to={`/players/${playerData.id}`}>
        <RaisedButton label="View Profile" onClick={onViewProfile} />
      </Link>
    </div>
  </Paper>
  </div>
);

export default PlayerItem;
