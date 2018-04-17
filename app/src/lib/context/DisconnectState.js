'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisconnectState = function () {
  function DisconnectState(context) {
    _classCallCheck(this, DisconnectState);

    this.context = context;
  }

  _createClass(DisconnectState, [{
    key: 'configuration',
    value: function configuration(settings) {
      var _context = this.context,
          Entity = _context.Entity,
          operators = _context.operators,
          configureState = _context.configureState;
      var _settings$Entity = settings.Entity,
          ClientEntity = _settings$Entity === undefined ? Entity : _settings$Entity,
          _settings$operators = settings.operators,
          clientOperators = _settings$operators === undefined ? {} : _settings$operators;

      this.context.Entity = ClientEntity;
      this.context.operators = Object.assign(operators, clientOperators);
      this.context.innerState = configureState;
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _context2 = this.context,
          connectState = _context2.connectState,
          getState = _context2.getState;

      this.context.db = getState();
      this.context.innerState = connectState;
    }
  }, {
    key: 'model',
    value: function model() {
      throw new Error('You should connect database before assignment model');
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      throw new Error('You still not connect to database');
    }
  }]);

  return DisconnectState;
}();

exports.default = DisconnectState;