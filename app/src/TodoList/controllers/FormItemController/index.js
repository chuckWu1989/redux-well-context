import MappingModel from '../../models/MappingModel';
import TodoListModel from '../../models/TodoListModel';
import TodoModel from '../../models/TodoModel';

export const onSubmit = e => (
  (dispatch, getState, context) => {
    context.connect();
    const table = context.model(MappingModel).createIfNotExist('mydb');
    const entity = table.mapping('todolist', TodoListModel);
    if (entity && !entity.isValueEmpty()) {
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
    const table = context.model(MappingModel).createIfNotExist('mydb');
    let entity = table.mapping('todolist', TodoListModel);
    if (!entity) {
      entity = context.model(TodoListModel).create();
      table.join(entity, 'todolist').update();
    }
    entity.value = e.target.value;
    entity.update();
    context.disconnect();
  }
);
