import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import { MuiThemeProvider } from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Main = ({ children }) => {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: '#fff',
      secondaryColor: '#fff',
      primaryTextColor: '#00B2A7A70',
      secondaryTextColor: '#B2A7A7',
      accent1Color: '#555',
      textColor: '#B2A7A7'
    }
  });
  return (
    <div className="App">
      <div className="App-intro">
        <MuiThemeProvider muiTheme={muiTheme}>
          { children }
        </MuiThemeProvider>
      </div>
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
