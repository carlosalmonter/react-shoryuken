import React from 'react';
import { TextField } from 'material-ui';
import './Players.css';

const PlayerSearch = ({ onPlayerInputChange }) => (
  <div>
    <div>
      <TextField
        onChange={onPlayerInputChange}
        hintText="Search Player"
      />
    </div>
  </div>
);

export default PlayerSearch;
