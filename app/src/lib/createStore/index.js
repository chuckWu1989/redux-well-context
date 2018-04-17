'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _thunk = require('../thunk');

var _thunk2 = _interopRequireDefault(_thunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createStore = function createStore() {
  var enhancers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var rootReducer = (0, _reducers2.default)();
  var initialState = _immutable2.default.Map({});
  var composeEnhancers = process.env.NODE_ENV === 'development' ? _reduxDevtoolsExtension.composeWithDevTools : _redux.compose;
  var store = (0, _redux.createStore)(rootReducer, initialState, composeEnhancers.apply(undefined, [(0, _redux.applyMiddleware)(_thunk2.default)].concat(_toConsumableArray(enhancers))));
  return store;
};

exports.default = createStore;