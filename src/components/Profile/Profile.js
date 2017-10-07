import React from 'react';
import { Paper } from 'material-ui';
import './Profile.css';

const Profile = ({ playerData }) => (
  <Paper className="Profile-container">
    <Paper
      className="Profile-image"
      circle
      style={
        {
          backgroundImage: `url(https://s3.amazonaws.com/srkranking/images/${playerData.name.replace(/\s+/g, '_').toLowerCase()}.jpg)`,
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
    {console.log(playerData)}
  </Paper>
);

export default Profile;
