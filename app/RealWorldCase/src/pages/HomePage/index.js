import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Explore from '../../routers/ExploreRouter';
import ErrorHandler from '../../routers/ErrorHandlerRouter';

const HomePage = props => (
  <div>
    <Explore appName={props.appName} history={props.history} />
    <hr />
    <ErrorHandler appName={props.appName} />
  </div>
);
HomePage.propTypes = {
  appName: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(HomePage);
