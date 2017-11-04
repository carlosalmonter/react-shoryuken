import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from '../Navigation/Navigation';
import './Main.css';
import colors from '../../config/colors';

const Main = ({ children }) => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: colors.WHITE,
      secondaryColor: colors.WHITE,
      primaryTextColor: colors.DARKER_GRAY,
      secondaryTextColor: colors.LIGHT_GRAY,
      accent1Color: colors.DARK_GRAY,
      textColor: colors.LIGHT_GRAY,
    },
  });
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
  children: PropTypes.shape().isRequired,
};

export default Main;
