import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import UserWidget from '../../routers/UserWidgetRouter';

const UserPage = props => (
  <UserWidget appName={props.appName} match={props.match} />
);
UserPage.propTypes = {
  match: PropTypes.object.isRequired,
  appName: PropTypes.string.isRequired,
};

export default withRouter(UserPage);
