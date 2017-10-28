import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import './Ranking.css';

const RankingItem = ({ itemData, characterBackgroundUrl }) => (
  <div
    className="Ranking-item-container"
  >
    <div className="Ranking-item-overlay" />
    <Paper
      className="Ranking-item"
      style={
        {
          backgroundImage: `url(${characterBackgroundUrl})`,
        }
      }
    >
      <div className="Player-rank">
        {itemData.cptRank}
      </div>
      <Paper
        className="Player-image"
        circle
        style={
          {
            backgroundImage: `url(https://s3.amazonaws.com/srkranking/images/${itemData.name.replace(/\s+/, '_').toLowerCase()}.jpg), url(https://s3.amazonaws.com/srkranking/images/${itemData.name.replace(/\s+/, '_').toLowerCase()}.png)`,
          }
        }
      />
      <div className="Ranking-name"><h1>{ itemData.name }</h1></div>
      <div className="Ranking-points">
        <h3>Points</h3>
        <p>{ itemData.cptScore }</p>
      </div>
    </Paper>
  </div>
);

RankingItem.propTypes = {
  itemData: PropTypes.shape().isRequired,
  characterBackgroundUrl: PropTypes.string.isRequired,
};

export default RankingItem;
