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
    this.setState({ searchType: value });
  };

  /**
   * Stores the search string value when it changes on the input
   * @param event
   */
  handleSearchStringChanged = (event) => {
    this.props.onSearchStringChanged(event.target.value);
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
