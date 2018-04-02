import {
  create,
  find,
  update,
  del
} from "../Entity/operators";
import Entity from "../Entity";
import ConfigureState from "./ConfigureState";
import ConnectState from "./ConnectState";
import ModelState from "./ModelState";
import CreateState from "./CreateState";
import FindState from "./FindState";
import InstanceState from "./InstanceState";
import DisconnectState from "./DisconnectState";

class Context {
  constructor(dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;
    this.db = undefined;
    this.dataModel = () => ({});
    this.instanceState = new InstanceState(this);
    this.configureState = new ConfigureState(this);
    this.connectState = new ConnectState(this);
    this.modelState = new ModelState(this);
    this.createState = new CreateState(this);
    this.findState = new FindState(this);
    this.disconnectState = new DisconnectState(this);
    this.innerState = this.instanceState;
    this.Model = Entity;
    this.operators = {
      create,
      find,
      update,
      delete: del
    };
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
    this.innerState.model(dataModel);
    return this;
  }
  create(id) {
    return this.innerState.create(id);
  }
  find(id) {
    return this.innerState.find(id);
  }
  disconnect() {
    this.innerState.disconnect();
    return this;
  }
}

export default Context;
