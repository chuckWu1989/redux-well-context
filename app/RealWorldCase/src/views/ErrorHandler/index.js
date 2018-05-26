import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandler = props => (
  props.errorMessage ?
    <p style={{ backgroundColor: '#e99', padding: 10 }}>
      <b>{props.errorMessage}</b>
      {' '}
      <button onClick={this.handleDismissClick}>
        Dismiss
      </button>
    </p> :
    null
);
ErrorHandler.defaultProps = {
  errorMessage: undefined,
};
ErrorHandler.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorHandler;
