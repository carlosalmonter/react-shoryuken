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

  /**
   * Sets the searchType state when its changed
   * @param event
   * @param index
   * @param value
   */
  handleSearchTypeChanged = (event, index, value) => {
    this.setState(() => ({
      searchType: value,
    }));
  };

  /**
   * Stores the search string value when it changes on the input
   * @param e
   */
  handleSearchStringChanged = (e) => {
    this.props.onSearchStringChanged(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="home__header">
          <SearchBar
            onSearchTypeChanged={this.handleSearchTypeChanged}
            onSearchStringChanged={this.handleSearchStringChanged}
            searchType={this.state.searchType}
          />
        </div>
      </div>
    );
  }
}

export default Home;
