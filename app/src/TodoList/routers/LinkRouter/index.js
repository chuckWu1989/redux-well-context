import { connect } from 'react-redux';
import { query } from '../../../lib';
import Link from '../../views/Link';
import { setActive, isDisabled } from '../../controllers/LinkController';

const mapStateToProps = (state, props) => ({
  active: query(state).withId('link').get('active'),
});
const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setActive(props.filter)),
  isDisabled,
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
