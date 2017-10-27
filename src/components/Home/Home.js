import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import './Home.css';

class Home extends Component {
  static propTypes = {
    onSearchStringChanged: PropTypes.func.isRequired,
  };

  state = {
    searchType: 'players',
  };

  handleSearchTypeChanged = (event, index, value) => {
    this.setState(() => ({
      searchType: value,
    }));
  };

  render() {
    return (
      <div>
        <div className="Home-header">
          <SearchBar
            onSearchTypeChanged={this.handleSearchTypeChanged}
            onSearchStringChanged={this.props.onSearchStringChanged}
            searchType={this.state.searchType}
          />
        </div>
      </div>
    );
  }
}

export default Home;
