import React, { Component } from 'react';
import PropTypes from 'prop-types';

const app = (appName, WrappedComponent) => (
  class extends Component {
    static propTypes = {
      initialize: PropTypes.func.isRequired,
      dispose: PropTypes.func.isRequired,
    }
    componentWillMount() {
      this.props.initialize(appName);
    }
    componentWillUnmount() {
      this.props.dispose(appName);
    }
    render() {
      return (
        <WrappedComponent {...this.props} name={appName} />
      );
    }
  }
);

export default app;
