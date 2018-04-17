'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.update = exports.find = exports.create = undefined;

var _reduxActions = require('redux-actions');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateAction = (0, _reduxActions.createAction)(_ActionTypes.UPDATE);
var deleteAction = (0, _reduxActions.createAction)(_ActionTypes.DELETE);

function setData(data) {
  var _this = this;

  try {
    data.forEach(function (value, key) {
      _this[key] = value;
    });
  } catch (e) {
    throw e;
  }
}
function getData() {
  var _this2 = this;

  var data = {};
  Object.keys(this).forEach(function (key) {
    data[key] = _this2[key];
  });
  return _immutable2.default.Map(data);
}
function create() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _v2.default)();

  if (this.state.get(id) !== undefined) {
    throw new Error('The id already existed!');
  }
  this.id = id;
  return this;
}
function find(id) {
  var data = this.state.get(id);
  if (data !== undefined) {
    this.id = id;
    setData.call(this, data);
    return this;
  }
  return undefined;
}
function update() {
  var id = this.id;

  var payload = getData.call(this);
  this.dispatch(updateAction({ id: id, payload: payload }));
}
function del() {
  var id = this.id;

  this.dispatch(deleteAction({ id: id }));
}

exports.create = create;
exports.find = find;
exports.update = update;
exports.del = del;