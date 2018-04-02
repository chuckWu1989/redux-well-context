class InstanceState {
  constructor(context) {
    this.context = context;
  }
  configuration(settings) {
    const { model: ClientModel, operators: clientOperators } = settings;
    if (ClientModel) {
      this.context.Model = ClientModel;
    }
    if (clientOperators) {
      this.context.operators = Object.assign(
        this.context.operators,
        clientOperators
      );
    }
    this.context.innerState = this.context.configureState;
  }
  connect() {
    this.context.db = this.context.getState();
    this.context.innerState = this.context.connectState;
  }
  model() {
    throw new Error("You should connect database before assignment model");
  }
  create() {
    throw new Error("You should connect database before create");
  }
  find() {
    throw new Error("You should connect database before find");
  }
  disconnect() {
    throw new Error("You still not connect to database");
  }
}

export default InstanceState;
