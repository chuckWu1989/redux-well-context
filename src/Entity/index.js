class Entity {
  constructor(state, dispatch, dataModel, operator) {
    this.state = state.get("store");
    this.dispatch = dispatch;
    this.dataModel = dataModel;
    this.create = operator.create;
    this.find = operator.find;
    this.update = operator.update;
    this.delete = operator.del;
  }
}

export default Entity;
