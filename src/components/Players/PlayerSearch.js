import React  from 'react';
import { TextField } from "material-ui";
import './Players.css';

const PlayerSearch = ({ playerData, onPlayerInputChange, onSearchClicked }) => (
  <div>
    <div>
      <TextField onChange={onPlayerInputChange}
        hintText="Search Player"
      />
    </div>
  </div>
);

export default PlayerSearch;
