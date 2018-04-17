import { connect } from 'react-redux';
import { query } from '../../../lib';
import TodoList from '../../views/TodoList';
import { toggleTodo, visibilityFilter } from '../../controllers/TodoListController';

const mapStateToProps = state => ({
  todos: query(state).withId('todolist').get('list'),
  active: query(state).withId('link').get('active'),
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  visibilityFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
