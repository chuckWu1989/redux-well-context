import * as operators from '../entity/operators';
import Entity from '../entity';
import ConfigureState from './ConfigureState';
import ConnectState from './ConnectState';
import ModelState from './ModelState';
import InstanceState from './InstanceState';
import DisconnectState from './DisconnectState';

class Context {
  constructor(dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;
    this.db = undefined;
    this.instanceState = new InstanceState(this);
    this.configureState = new ConfigureState(this);
    this.connectState = new ConnectState(this);
    this.modelState = new ModelState(this);
    this.disconnectState = new DisconnectState(this);
    this.innerState = this.instanceState;
    this.Entity = Entity;
    this.operators = operators;
    return this;
  }
  configuration(settings) {
    this.innerState.configuration(settings);
    return this;
  }
  connect() {
    this.innerState.connect();
    return this;
  }
  model(dataModel) {
    return this.innerState.model(dataModel);
  }
  disconnect() {
    this.innerState.disconnect();
    return this;
  }
}

export default Context;
