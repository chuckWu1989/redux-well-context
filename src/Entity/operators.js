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
  data.indices = this.indices;
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
function createIfNotExist(id) {
  return this.find(id) || this.create(id);
}
function join(target, prop) {
  if (typeof target !== 'object' || target === null || typeof prop !== 'string') {
    throw new Error('TypeError: target must be an entity and prop must be string');
  }
  const { id } = target;
  this[prop] = id;
  this.indices.push(id);
  return this;
}
function mapping(prop, Model) {
  const { context, [prop]: id } = this;
  return context.model(Model).find(id);
}
function del() {
  const { id } = this;
  this.indices.forEach((value) => {
    if (this.state.get(value) !== undefined) {
      throw new Error('Fail to delete entity. You should delte join table before deleting entity.');
    }
  });
  this.dispatch(deleteAction({ id }));
}

export { create, find, update, del, createIfNotExist, join, mapping };
