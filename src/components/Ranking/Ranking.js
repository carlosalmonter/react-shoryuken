import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RankingItem from './RankingItem';
import config from '../../config/config';

class Ranking extends Component {
  static propTypes = {
    isLoadingData: PropTypes.bool.isRequired,
    cptRankingData: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchCPTRankingData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchCPTRankingData();
  }

  getCharacterBackground = (itemData) => {
    const characterName = itemData.character[0].replace(config.MAIN_GAME, '');
    return `${config.CPT_BACKGROUND_CHARACTER_IMAGE_URL}${characterName.toLowerCase()}.jpg`;
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
