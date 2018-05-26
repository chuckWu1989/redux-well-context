import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserWidget extends Component {
  componentWillMount() {
    this.props.initialize();
  }
  componentWillUnmount() {
    this.props.dispose();
  }
  render() {
    return (
      <div>
        <hr />
      </div>
    );
  }
}
UserWidget.propTypes = {
  appName: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
  dispose: PropTypes.func.isRequired,
};

export default UserWidget;
