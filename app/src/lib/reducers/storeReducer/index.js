'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = require('redux-actions');

var _ActionTypes = require('../../constants/ActionTypes');

var _InitialModel = require('../../models/InitialModel');

var _InitialModel2 = _interopRequireDefault(_InitialModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _ActionTypes.UPDATE, function (state, _ref) {
  var _ref$payload = _ref.payload,
      id = _ref$payload.id,
      payload = _ref$payload.payload;
  return state.set(id, payload);
}), _defineProperty(_handleActions, _ActionTypes.DELETE, function (state, _ref2) {
  var id = _ref2.payload.id;
  return state.remove(id);
}), _handleActions), _InitialModel2.default);