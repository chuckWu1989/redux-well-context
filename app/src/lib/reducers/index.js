'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _storeReducer = require('./storeReducer');

var _storeReducer2 = _interopRequireDefault(_storeReducer);

var _Config = require('../constants/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var combineReducers = function combineReducers() {
  var reducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var immutable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var combine = immutable ? _reduxImmutable.combineReducers : _redux.combineReducers;
  return combine(Object.assign(_defineProperty({}, _Config2.default, _storeReducer2.default), reducers));
};

exports.default = combineReducers;