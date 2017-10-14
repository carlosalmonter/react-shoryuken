import React from 'react';
import { Paper } from 'material-ui';
import './Profile.css';

const Profile = ({ playerData, characterBackgroundUrl }) => (
  <Paper
    className="Profile-container"
    style={
      {
        backgroundImage: `url(${characterBackgroundUrl})`,
      }
    }
  >
    <div className="Profile-inner-container">
      <Paper
        className="Profile-image"
        circle
        style={
          {
            backgroundImage: `url(https://s3.amazonaws.com/srkranking/images/${playerData.name.replace(/\s+/g, '_').toLowerCase()}.jpg), url(https://s3.amazonaws.com/srkranking/images/${playerData.name.replace(/\s+/g, '_').toLowerCase()}.png), url(https://capcomprotour.com/wp-content/uploads/2014/02/capcom-pt-logo.png)`,
          }
        }
      />
      <div className="Profile-info">
        <div>
          <h1>
            {playerData.name}
          </h1>
        </div>
        <div>
          Real Name: {playerData.realname ? playerData.realname : 'N/A'}
        </div>
        <div>
            Country: {playerData.country}
        </div>
        <div>
          CPT Score/Rank: {playerData.cptScore}/{playerData.cptRank}
        </div>
      </div>
    </div>
  </Paper>
);

export default Profile;
