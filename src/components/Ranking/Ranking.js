import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RankingItem from './RankingItem';

class Ranking extends Component {
  static propTypes = {
    isLoadingData: PropTypes.bool.isRequired,
    cptRankingData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    fetchCPTRankingData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchCPTRankingData();
  }

  getCharacterBackground = (itemData) => {
    const regex = new RegExp('SF5_');
    const characterName = itemData.character[0].replace(regex, '');
    return `https://capcomprotour.com/wp-content/themes/foundation/images/bg-player-${characterName.toLowerCase()}.jpg`;
  };

  render() {
    const { isLoadingData, cptRankingData } = this.props;
    return (
      <div>
        <div className="Ranking-container">
          <div>
            <h1>CPT RANKING</h1>
          </div>
          <div className="Ranking-results">
            { isLoadingData && 'Loading...'}
            {
              cptRankingData.map(itemData => (
                <Link key={itemData.id} to={`/players/${itemData.id}`}>
                  <RankingItem
                    itemData={itemData}
                    characterBackgroundUrl={this.getCharacterBackground(itemData)}
                  />
                </Link>
              )) }
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
