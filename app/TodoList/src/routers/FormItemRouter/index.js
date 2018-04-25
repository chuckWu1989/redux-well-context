import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import FormItem from '../../views/FormItem';
import { onSubmit, onChange } from '../../controllers/FormItemController';

const mapStateToProps = state => ({
  value: query(state).mapping('mydb', 'todolist').get('value'),
});
const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onSubmit(e)),
  onChange: e => dispatch(onChange(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormItem);
