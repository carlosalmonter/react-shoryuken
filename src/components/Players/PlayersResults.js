import React  from 'react';
import { Paper } from "material-ui";
import PlayerItem from "./PlayerItem";

const PlayersResults = ({ isLoadingData, playersData }) => (
  <Paper>
    { isLoadingData && 'Loading...'}
    { playersData.map((playerData) => <div key={playerData.id}><PlayerItem playerData={playerData} /></div>) }
  </Paper>
);

export default PlayersResults;
