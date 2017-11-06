import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FloatingActionButton, MenuItem, SelectField, TextField } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';
import * as _ from 'lodash';
import config from '../../config/config';

const SearchBar = ({ onSearchTypeChanged, onSearchStringChanged, searchType }) => (
  <div>
    <div>
      <SelectField
        floatingLabelText="Search For:"
        value={searchType}
        onChange={onSearchTypeChanged}
      >
        {
          config.SEARCH_BAR_SELECT_ITEMS.map(item => (
            <MenuItem key={item} value={item} primaryText={_.upperFirst(item)} />
          ))
        }
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
