import React from 'react';
import PropTypes from 'prop-types';
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

PlayerSearch.propTypes = {
  onPlayerInputChange: PropTypes.func.isRequired,
};

export default PlayerSearch;
