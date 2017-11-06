import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from '../Navigation/Navigation';
import './Main.css';
import config from '../../config/config';

const Main = ({ children }) => {
  const muiTheme = getMuiTheme(config.MUI_THEME_PALETTE);
  return (
    <div className="app">
      <div className="app__container">
        <BrowserRouter>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <Navigation />
              {children}
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
