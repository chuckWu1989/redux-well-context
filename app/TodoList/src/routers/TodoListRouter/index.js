import { connect } from 'react-redux';
import { query } from 'redux-well-context';
import TodoList from '../../views/TodoList';
import { toggleTodo, visibilityFilter } from '../../controllers/TodoListController';

const mapStateToProps = state => ({
  todos: query(state).mapping('mydb', 'todolist').get('list'),
  active: query(state).mapping('mydb', 'link').get('active'),
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  visibilityFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
