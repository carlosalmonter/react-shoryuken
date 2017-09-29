import React  from 'react';
import { FloatingActionButton, TextField } from "material-ui";
import SearchIcon from 'material-ui/svg-icons/action/search';
import './Players.css';

const PlayerSearch = ({ playerData, onPlayerInputChange, onSearchClicked }) => (
  <div>
    <div>
      <TextField onChange={onPlayerInputChange}
        hintText="Search Player"
      />
    </div>
    <div>

      <FloatingActionButton
        secondary={ true }
        onClick={onSearchClicked}
      >
        <SearchIcon
        />
      </FloatingActionButton>
    </div>
  </div>
);

export default PlayerSearch;
