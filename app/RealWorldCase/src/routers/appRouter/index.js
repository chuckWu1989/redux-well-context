import { connect } from 'react-redux';
import { initialize, dispose } from '../../controllers/appController';
import app from '../../hocs/app';

const mapDispatchToProps = dispatch => ({
  initialize: appName => dispatch(initialize(appName)),
  dispose: appName => dispatch(dispose(appName)),
});

export default (appName, WrappedComponent) => (
  connect(null, mapDispatchToProps)(app(appName, WrappedComponent))
);
