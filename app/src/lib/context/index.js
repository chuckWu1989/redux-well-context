'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _operators = require('../entity/operators');

var _entity = require('../entity');

var _entity2 = _interopRequireDefault(_entity);

var _ConfigureState = require('./ConfigureState');

var _ConfigureState2 = _interopRequireDefault(_ConfigureState);

var _ConnectState = require('./ConnectState');

var _ConnectState2 = _interopRequireDefault(_ConnectState);

var _ModelState = require('./ModelState');

var _ModelState2 = _interopRequireDefault(_ModelState);

var _InstanceState = require('./InstanceState');

var _InstanceState2 = _interopRequireDefault(_InstanceState);

var _DisconnectState = require('./DisconnectState');

var _DisconnectState2 = _interopRequireDefault(_DisconnectState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context(dispatch, getState) {
    _classCallCheck(this, Context);

    this.dispatch = dispatch;
    this.getState = getState;
    this.db = undefined;
    this.instanceState = new _InstanceState2.default(this);
    this.configureState = new _ConfigureState2.default(this);
    this.connectState = new _ConnectState2.default(this);
    this.modelState = new _ModelState2.default(this);
    this.disconnectState = new _DisconnectState2.default(this);
    this.innerState = this.instanceState;
    this.Entity = _entity2.default;
    this.operators = {
      create: _operators.create,
      find: _operators.find,
      update: _operators.update,
      delete: _operators.del
    };
    return this;
  }

  _createClass(Context, [{
    key: 'configuration',
    value: function configuration(settings) {
      this.innerState.configuration(settings);
      return this;
    }
  }, {
    key: 'connect',
    value: function connect() {
      this.innerState.connect();
      return this;
    }
  }, {
    key: 'model',
    value: function model(dataModel) {
      return this.innerState.model(dataModel);
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      this.innerState.disconnect();
      return this;
    }
  }]);

  return Context;
}();

exports.default = Context;