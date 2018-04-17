'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require('../context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createThunkMiddleware = function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          var context = new _context2.default(dispatch, getState);
          return action(dispatch, getState, context, extraArgument);
        }
        return next(action);
      };
    };
  };
};

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports.default = thunk;