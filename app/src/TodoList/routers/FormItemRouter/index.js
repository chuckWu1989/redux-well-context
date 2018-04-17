import { connect } from 'react-redux';
import FormItem from '../../views/FormItem';
import { onSubmit, onChange } from '../../controllers/FormItemController';
import { query } from '../../../lib';

const mapStateToProps = state => ({
  value: query(state).withId('todolist').get('value'),
});
const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onSubmit(e)),
  onChange: e => dispatch(onChange(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormItem);
