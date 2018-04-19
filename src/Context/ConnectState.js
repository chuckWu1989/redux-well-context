class ConnectState {
  constructor(context) {
    this.context = context;
  }
  configuration() {
    throw new Error('Context already connected, please disconnect before configuration');
  }
  connect() {
    throw new Error('Context already connected, please disconnect before reconnect');
  }
  model(Model) {
    const {
      db,
      dispatch,
      operators,
      Entity,
      modelState,
    } = this.context;
    this.context.innerState = modelState;
    return new Entity(db, dispatch, Model, operators, this);
  }
  disconnect() {
    const { disconnectState } = this.context;
    this.context.db = undefined;
    this.context.innerState = disconnectState;
  }
}

export default ConnectState;
