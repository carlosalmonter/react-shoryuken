import React  from 'react';
import { Paper, RaisedButton} from "material-ui";
import './Players.css';

const PlayerItem = ({ playerData, onViewProfile }) => (
  <Paper className="Player-item">
    <div>Name: {playerData.name}</div>
    <div>Country: {playerData.country}</div>
    <div><RaisedButton label="View Profile" onClick={onViewProfile} /></div>
  </Paper>
);

export default PlayerItem;
