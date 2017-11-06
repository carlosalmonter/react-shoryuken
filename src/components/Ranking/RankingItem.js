import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import './Ranking.css';
import config from '../../config/config';

const RankingItem = ({ itemData, characterBackgroundUrl }) => {
  const playerProfileImage = `${config.PLAYER_PROFILE_IMAGE_PATH}${itemData.name.replace(/\\s+/, '_').toLowerCase()}`;

  const rankingItemStyle = {
    backgroundImage: `url(${characterBackgroundUrl})`,
  };

  const playerImageStyle = {
    backgroundImage: `url(${playerProfileImage}.jpg), url(${playerProfileImage}.png)`,
  };

  return (
    <div
      className="ranking__item__container"
    >
      <div className="ranking__item__overlay" />
      <Paper
        className="ranking__item"
        style={rankingItemStyle}
      >
        <div className="player__rank">
          {itemData.cptRank}
        </div>
        <Paper
          className="player__image"
          circle
          style={playerImageStyle}
        />
        <div className="ranking__name"><h1>{ itemData.name }</h1></div>
        <div className="ranking__points">
          <h3>Points</h3>
          <p>{ itemData.cptScore }</p>
        </div>
      </Paper>
    </div>
  );
};

RankingItem.propTypes = {
  itemData: PropTypes.shape().isRequired,
  characterBackgroundUrl: PropTypes.string.isRequired,
};

export default RankingItem;
