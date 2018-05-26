import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import { initialize, handleKeyUp, saveValue, handleGoClick, dispose } from '../../controllers/ExploreController';
import Explore from '../../views/Explore';
import { EXPLORE } from '../../constants/Config';

const mapStateToProps = (state, props) => ({
  value: query(state).mapping(props.appName, EXPLORE).get('value'),
});
const mapDispatchToProps = dispatch => ({
  initialize: appName => dispatch(initialize(appName)),
  saveValue: (e, appName) => dispatch(saveValue(e, appName)),
  handleKeyUp: (e, appName, history) => dispatch(handleKeyUp(e, appName, history)),
  handleGoClick: (appName, history) => dispatch(handleGoClick(appName, history)),
  dispose: appName => dispatch(dispose(appName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
