'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Config = require('../constants/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query(state) {
  return {
    withId: function withId(id) {
      var result = void 0;
      if (_immutable2.default.isImmutable(state)) {
        result = state.getIn([_Config2.default, id]);
      } else {
        var store = state.store;

        result = store.get(id);
      }
      return result === undefined ? _immutable2.default.Map({}) : result;
    }
  };
};

exports.default = query;
