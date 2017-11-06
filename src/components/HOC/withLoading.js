import React, { Component } from 'react';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';
import colors from '../../config/colors';
import config from '../../config/config';

const withLoading = WrappedComponent => (
  class WithLoading extends Component {
    static propTypes = {
      isLoadingData: PropTypes.bool.isRequired,
      isLoadingError: PropTypes.bool.isRequired,
    };
    componentDidMount() {
      console.log('hoc');
    }

    render() {
      const { isLoadingData, isLoadingError } = this.props;
      return (
        <div>
          {isLoadingData && <CircularProgress color={colors.BLACK} />}
          {isLoadingError && config.LOADING_ERROR_MESSAGE}
          {!isLoadingData && <WrappedComponent {...this.props} />}
        </div>
      );
    }
  });

export default withLoading;
