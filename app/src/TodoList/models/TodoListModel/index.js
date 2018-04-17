import { List } from 'immutable';

class TodoListModel {
  constructor() {
    this.current = 0;
    this.value = '';
    this.list = new List();
  }
  isValueEmpty() {
    return this.value === '';
  }
}

export default TodoListModel;
