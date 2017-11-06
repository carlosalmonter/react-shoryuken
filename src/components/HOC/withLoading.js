import React from 'react';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import config from '../../config/config';

const withLoading = (WrappedComponent) => {
  const WithLoadingComponent = props => (
    <div>
      {props.isLoadingData && <CircularProgress color={colors.BLACK} />}
      {props.isLoadingError && config.LOADING_ERROR_MESSAGE}
      {!props.isLoadingData && <WrappedComponent {...props} />}
    </div>
  );

  WithLoadingComponent.propTypes = {
    isLoadingData: PropTypes.bool.isRequired,
    isLoadingError: PropTypes.bool.isRequired,
  };

  return WithLoadingComponent;
};

export default withLoading;
