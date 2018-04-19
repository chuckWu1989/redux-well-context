'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _immutable = require('immutable');

var _Config = require('../constants/Config');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Entity(state, dispatch, Model, operator, context) {
  if (typeof Model !== 'function') {
    throw new Error('Model must be a class');
  }
  if ((typeof operator === 'undefined' ? 'undefined' : _typeof(operator)) !== 'object' || operator === null) {
    throw new Error('operator must be an non-null object');
  }

  var EntityModel = function (_Model) {
    _inherits(EntityModel, _Model);

    function EntityModel() {
      _classCallCheck(this, EntityModel);

      var _this = _possibleConstructorReturn(this, (EntityModel.__proto__ || Object.getPrototypeOf(EntityModel)).call(this, state, dispatch));

      Object.defineProperties(_this, {
        id: {
          value: undefined,
          writable: true
        },
        state: {
          value: (0, _immutable.isImmutable)(state) ? state.get(_Config2.default) : state[_Config2.default]
        },
        dispatch: {
          value: dispatch
        },
        indices: {
          value: (0, _immutable.List)(),
          writable: true
        },
        context: {
          value: context
        }
      });
      Object.keys(operator).forEach(function (key) {
        Object.defineProperty(_this, key, {
          value: operator[key]
        });
      });
      return _this;
    }

    return EntityModel;
  }(Model);

  return new EntityModel();
}

exports.default = Entity;