'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _Config = require('../constants/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withId = function withId(state) {
  return function (id) {
    var result = void 0;
    if ((0, _immutable.isImmutable)(state)) {
      result = state.getIn([_Config2.default, id]);
    } else {
      var store = state.store;

      result = store.get(id);
    }
    return result === undefined ? (0, _immutable.Map)({}) : result;
  };
};
var mapping = function mapping(state) {
  return function () {
    for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    var handler = withId(state);
    var itemId = items.reduce(function (prev, curr) {
      return handler(prev).get(curr);
    });
    return handler(itemId);
  };
};
var query = function query(state) {
  return {
    withId: withId(state),
    mapping: mapping(state)
  };
};

exports.default = query;