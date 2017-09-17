import React, { Component } from 'react';
import Home from '../components/Home/Home';
import { searchPlayer } from '../utils/Api';

export default class HomeContainer extends Component {
  state = {
    isLoadingData: true,
    searchData: [],
  };

  componentDidMount() {
    searchPlayer()
      .then((response) => {
        console.log(response);
        this.setState(() => ({
          isLoadingData: false,
          searchData: response,
        }));
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Home />
    );
  }
}
