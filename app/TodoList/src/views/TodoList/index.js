import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import { SHOW_ALL } from '../../constants/Config';

const TodoList = props => (
  <ul>
    {
      props.visibilityFilter(props.todos, props.active).map(todo => (
        <Todo
          key={todo.id}
          completed={todo.completed}
          text={todo.text}
          visibility={todo.visibility}
          onClick={() => props.toggleTodo(todo.id)}
        />
      ))
    }
  </ul>
);
TodoList.defaultProps = {
  todos: [],
  active: SHOW_ALL,
};
TodoList.propTypes = {
  todos: PropTypes.any,
  active: PropTypes.string,
  toggleTodo: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.func.isRequired,
};

export default TodoList;
