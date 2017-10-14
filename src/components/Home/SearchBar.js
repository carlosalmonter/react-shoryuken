import React from 'react';
import { FloatingActionButton, MenuItem, SelectField, TextField } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchBar = ({ onSearchButtonClicked }) => (
  <div>
    <div>
      <SelectField
        floatingLabelText="Search For:"
        value="players"
      >
        <MenuItem value="players" primaryText="Players" />
        <MenuItem value="tournaments" primaryText="Tournaments" />
      </SelectField>
    </div>
    <div>
      <TextField
        hintText="Search String"
      />
    </div>
    <div>

      <FloatingActionButton secondary onClick={onSearchButtonClicked} >
        <SearchIcon />
      </FloatingActionButton>
    </div>
  </div>
);

export default SearchBar;
