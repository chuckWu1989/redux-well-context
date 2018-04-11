class ConfigureState {
  constructor(context) {
    this.context = context;
  }
  configuration(settings) {
    const { Entity, operators, configureState } = this.context;
    const {
      Entity: ClientEntity = Entity,
      operators: clientOperators = {},
    } = settings;
    this.context.Entity = ClientEntity;
    this.context.operators = Object.assign(operators, clientOperators);
    this.context.innerState = configureState;
  }
  connect() {
    const { connectState, getState } = this.context;
    this.context.db = getState();
    this.context.innerState = connectState;
  }
  model() {
    throw new Error('You should connect database before assignment model');
  }
  disconnect() {
    throw new Error('You still not connect to database');
  }
}

export default ConfigureState;
