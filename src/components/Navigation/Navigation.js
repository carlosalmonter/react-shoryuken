import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="navigation__logo">
      <h1>
        React Shoryuken
      </h1>
    </div>
    <div className="navigation__links">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/players">Players</Link>
      </span>
      <span>
        <Link to="/tournaments">Tournaments</Link>
      </span>
      <span>
        <Link to="/rankings">CPT Ranking</Link>
      </span>
    </div>
  </div>
);

export default Navigation;
