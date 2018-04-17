import TodoListModel from '../../models/TodoListModel';
import TodoModel from '../../models/TodoModel';

export const onSubmit = e => (
  (dispatch, getState, context) => {
    context.connect();
    const entity = context.model(TodoListModel).find('todolist');
    if (entity && !entity.isValueEmpty()) {
      const { value } = entity;
      const todo = new TodoModel(entity.current, entity.value, false);
      entity.list = entity.list.push(todo);
      entity.value = '';
      entity.current += 1;
      entity.update();
    }
    context.disconnect();
  }
);
export const onChange = e => (
  (dispatch, getSTate, context) => {
    context.connect();
    const entity =
      context.model(TodoListModel).find('todolist') ||
      context.model(TodoListModel).create('todolist');
    entity.value = e.target.value;
    entity.update();
    context.disconnect();
  }
);
