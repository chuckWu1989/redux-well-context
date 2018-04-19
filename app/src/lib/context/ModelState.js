'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelState = function () {
  function ModelState(context) {
    _classCallCheck(this, ModelState);

    this.context = context;
  }

  _createClass(ModelState, [{
    key: 'configuration',
    value: function configuration() {
      throw new Error('Context already connected, please disconnect before configuration');
    }
  }, {
    key: 'connect',
    value: function connect() {
      throw new Error('Context already connected, please disconnect before reconnect');
    }
  }, {
    key: 'model',
    value: function model(Model) {
      var _context = this.context,
          db = _context.db,
          dispatch = _context.dispatch,
          operators = _context.operators,
          Entity = _context.Entity,
          modelState = _context.modelState;

      this.context.innerState = modelState;
      return new Entity(db, dispatch, Model, operators, this);
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      var disconnectState = this.context.disconnectState;

      this.context.db = undefined;
      this.context.innerState = disconnectState;
    }
  }]);

  return ModelState;
}();

exports.default = ModelState;