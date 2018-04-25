import MappingModel from '../../models/MappingModel';
import TodoListModel from '../../models/TodoListModel';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/Config';

export const toggleTodo = id => (
  (dispatch, getState, context) => {
    context.connect();
    const table = context.model(MappingModel).find('mydb');
    const entity = table.mapping('todolist', TodoListModel);
    if (entity) {
      entity.list = entity.list.update(
        entity.list.findIndex(todo => todo.id === id),
        (todo) => {
          const newTodo = Object.assign({}, todo);
          newTodo.completed = !todo.completed;
          return newTodo;
        },
      );
      entity.update();
    }
    context.disconnect();
  }
);
export const visibilityFilter = (todos, active) => {
  switch (active) {
    case SHOW_ALL: return todos;
    case SHOW_ACTIVE: return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED: return todos.filter(todo => todo.completed);
    default: return todos;
  }
};
