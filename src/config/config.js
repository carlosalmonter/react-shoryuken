import colors from './colors';

const config = {
  MINIMUM_SEARCH_STRING_LENGTH: 2,
  EMPTY_STRING: '',
  CPT_BACKGROUND_CHARACTER_IMAGE_URL: 'https://capcomprotour.com/wp-content/themes/foundation/images/bg-player-',
  MAIN_GAME: 'SF5_',
  PLAYER_PROFILE_IMAGE_PATH: 'https://s3.amazonaws.com/srkranking/images/',
  LOADING_ERROR_MESSAGE: 'An Error Occurred While Getting the Data!',
  PROXY_URL: 'https://cors-anywhere.herokuapp.com/',
  API_URL: 'http://rank.shoryuken.com/api/',
  MUI_THEME_PALETTE: {
    palette: {
      primary1Color: colors.WHITE,
      secondaryColor: colors.WHITE,
      primaryTextColor: colors.DARKER_GRAY,
      secondaryTextColor: colors.LIGHT_GRAY,
      accent1Color: colors.DARK_GRAY,
      textColor: colors.LIGHT_GRAY,
    },
  },
  SEARCH_BAR_SELECT_ITEMS: [
    'players',
    'tournaments',
  ],
};

export default config;

