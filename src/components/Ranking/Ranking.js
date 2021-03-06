import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui';
import RankingItem from './RankingItem';
import config from '../../config/config';
import colors from '../../config/colors';

class Ranking extends Component {
  static propTypes = {
    isLoadingData: PropTypes.bool.isRequired,
    isLoadingError: PropTypes.bool.isRequired,
    cptRankingData: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchCPTRankingData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchCPTRankingData();
  }

  /**
   * Returns the player's main character background url
   * @param itemData
   * @returns {string}
   */
  getCharacterBackground = (itemData) => {
    const characterName = itemData.character[0].replace(config.MAIN_GAME, '');
    return `${config.CPT_BACKGROUND_CHARACTER_IMAGE_URL}${characterName.toLowerCase()}.jpg`;
  };

  render() {
    const { isLoadingData, cptRankingData, isLoadingError } = this.props;
    return (
      <div>
        <div className="ranking__container">
          <div>
            <h1>CPT RANKING</h1>
          </div>
          <div className="ranking__results">
            { isLoadingData && <CircularProgress color={colors.BLACK} /> }
            { isLoadingError && config.LOADING_ERROR_MESSAGE}
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
