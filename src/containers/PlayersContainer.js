// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Players from '../components/Players/Players';

import { playersActions } from '../actions';

// import { searchPlayer } from '../utils/Api';
//
// export default class PlayersContainer extends Component {
//   // state = {
//   //   isLoadingData: false,
//   //   searchString: '',
//   //   searchData: [],
//   // };
//
//   // handlePlayerInputChange = (e) => {
//   //   const searchQuery = e.target.value;
//   //   if (searchQuery.length > 2) {
//   //     this.setState({
//   //       isLoadingData: true,
//   //       searchData: [],
//   //     });
//   //
//   //     searchPlayer(searchQuery)
//   //       .then((response) => {
//   //         this.setState(() => ({
//   //           isLoadingData: false,
//   //           searchData: response,
//   //         }));
//   //       }).catch((error) => {
//   //         console.log(error);
//   //       });
//   //   }
//   // };
//
//   render() {
//     return (
//       <Players
//         isLoadingData={this.state.isLoadingData}
//         playersData={this.state.searchData}
//         onPlayerInputChange={this.handlePlayerInputChange}
//         onSearchClicked={this.handleSearchClicked}
//         onViewProfile={this.handleViewProfile}
//       />
//     );
//   }
// }

const mapStateToProps = ({ players }) => players;
const mapDispatchToProps = dispatch => ({
  fetchData: searchString => playersActions.fetchData(dispatch, searchString),
  onPlayerInputChange: searchString => dispatch(playersActions.searchDataUpdated(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
