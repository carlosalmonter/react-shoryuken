import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './Home.css';

class Home extends Component {
  handleSearchButtonClicked = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <div className="Home-header">
          <SearchBar
            onSearchButtonClicked={this.handleSearchButtonClicked}
          />
        </div>
      </div>
    );
  }
}

export default Home;
