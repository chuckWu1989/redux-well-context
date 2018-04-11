import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import Counter from '../../views/Counter';
import { onIncrease, onDecrease } from '../../controllers/CounterController';

const mapStateToProps = (state, props) => ({
  times: query(state).withId(props.name).get('times'),
});
const mapDispatchToProps = (dispatch, props) => ({
  onIncrease: () => dispatch(onIncrease(props)),
  onDecrease: () => dispatch(onDecrease(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
