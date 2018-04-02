import { createAction } from "redux-actions";
import Immutable from "immutable";
import uuidv4 from "uuid/v4";
import { UPDATE, DELETE } from "../constants/ActionTypes";

const updateAction = createAction(UPDATE);
const deleteAction = createAction(DELETE);

function setDataToModel(model, data) {
  try {
    data.forEach((value, key) => {
      model[key] = value;
    })
    return model;
  } catch (e) {
    throw e;
  }
}
function getDataFromModel(model) {
  const data = {};
  Object.keys(model).forEach(key => {
    data[key] = model[key];
  });
  return Immutable.Map(data);
}
function create(id = uuidv4()) {
  const { dataModel: Model } = this;
  if (this.state.get(id) !== undefined) {
    throw new Error("The id already existed!");
  } else if (typeof Model !== "function") {
    throw new Error("Model must be a class");
  }
  this.id = id;
  const model = new Model();
  Object.setPrototypeOf(model, this);
  return model;
}
function find(id) {
  const { dataModel: Model } = this;
  if (typeof Model !== "function") {
    throw new Error("Model must be a class");
  }
  const data = this.state.get(id);
  if (data !== undefined) {
    this.id = id;
    const model = setDataToModel(new Model(), data);
    Object.setPrototypeOf(model, this);
    return model;
  }
  return undefined;
}
function update() {
  const { id } = this;
  const payload = getDataFromModel(this);
  this.dispatch(updateAction({ id, payload }));
}
function del() {
  const { id } = this;
  this.dispatch(deleteAction({ id }));
}

export { create, find, update, del };
