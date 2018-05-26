import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import ErrorHandler from '../../views/ErrorHandler';

const mapStateToProps = (state, props) => ({
  errorMessage: query(state).withId(props.appName).get('error'),
});

export default connect(mapStateToProps, null)(ErrorHandler);
