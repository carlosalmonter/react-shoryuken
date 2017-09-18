import React  from 'react';
import { Paper, RaisedButton} from "material-ui";
import './Players.css';

const PlayerItem = ({ playerData }) => (
  <Paper className="Player-item">
    <div>Name: {playerData.name}</div>
    <div>Country: {playerData.country}</div>
    <div><RaisedButton label="View Profile" /></div>
  </Paper>
);

export default PlayerItem;
