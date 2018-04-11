import { createAction } from 'redux-actions';
import Immutable from 'immutable';
import uuidv4 from 'uuid/v4';
import { UPDATE, DELETE } from '../constants/ActionTypes';

const updateAction = createAction(UPDATE);
const deleteAction = createAction(DELETE);

function setData(data) {
  try {
    data.forEach((value, key) => {
      this[key] = value;
    });
  } catch (e) {
    throw e;
  }
}
function getData() {
  const data = {};
  Object.keys(this).forEach((key) => {
    data[key] = this[key];
  });
  return Immutable.Map(data);
}
function create(id = uuidv4()) {
  if (this.state.get(id) !== undefined) {
    throw new Error('The id already existed!');
  }
  this.id = id;
  return this;
}
function find(id) {
  const data = this.state.get(id);
  if (data !== undefined) {
    this.id = id;
    setData.call(this, data);
    return this;
  }
  return undefined;
}
function update() {
  const { id } = this;
  const payload = getData.call(this);
  this.dispatch(updateAction({ id, payload }));
}
function del() {
  const { id } = this;
  this.dispatch(deleteAction({ id }));
}

export { create, find, update, del };
