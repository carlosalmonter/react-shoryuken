import React  from 'react';
import logo from '../../logo.svg';
import './Main.css';

const Main = ({children}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React Main</h2>
    </div>
    <div className="App-intro">
      {children}
    </div>
  </div>
);

export default Main;