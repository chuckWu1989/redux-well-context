class FindState {
  constructor(context) {
    this.context = context;
  }
  configuration() {
    throw new Error(
      "Context already connected, please disconnect before configuration"
    );
  }
  connect() {
    throw new Error(
      "Context already connected, please disconnect before reconnect"
    );
  }
  create(id) {
    const { db, dispatch, operators, dataModel } = this.context;
    this.context.innerState = this.context.createState;
    const obj = new this.context.Model(db, dispatch, dataModel, operators);
    return obj.create(id);
  }
  model(Model) {
    this.context.dataModel = Model;
    this.context.innerState = this.context.modelState;
  }
  find(id) {
    const { db, dispatch, operators, dataModel } = this.context;
    this.context.innerState = this.context.findState;
    const obj = new this.context.Model(db, dispatch, dataModel, operators);
    return obj.find(id);
  }
  disconnect() {
    this.context.db = undefined;
    this.context.dataModel = () => ({});
    this.context.innerState = this.context.disconnectState;
  }
}

export default FindState;
