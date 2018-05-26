import { connect } from 'react-redux';
import { initialize, dispose } from '../../controllers/UserWidgetController';
import UserWidget from '../../views/UserWidget';

const mapDispatchToProps = (dispatch, props) => ({
  initialize: () => dispatch(initialize(props)),
  dispose: () => dispatch(dispose(props)),
});

export default connect(null, mapDispatchToProps)(UserWidget);
