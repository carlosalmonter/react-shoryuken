import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FloatingActionButton, MenuItem, SelectField, TextField } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchBar = ({ onSearchTypeChanged, onSearchStringChanged, searchType }) => (
  <div>
    <div>
      <SelectField
        floatingLabelText="Search For:"
        value={searchType}
        onChange={onSearchTypeChanged}
      >
        <MenuItem value="players" primaryText="Players" />
        <MenuItem value="tournaments" primaryText="Tournaments" />
      </SelectField>
    </div>
    <div>
      <TextField
        hintText="Search String"
        onChange={onSearchStringChanged}
      />
    </div>
    <div>
      <Link to={`/${searchType}`}>
        <FloatingActionButton secondary >
          <SearchIcon />
        </FloatingActionButton>
      </Link>
    </div>
  </div>
);

SearchBar.propTypes = {
  onSearchTypeChanged: PropTypes.func.isRequired,
  onSearchStringChanged: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
};

export default SearchBar;
