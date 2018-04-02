import CounterModel from "../../models/CounterModel";

export const onIncrease = props => (context) => {
  const { name } = props;
  context.connect();
  let entity = context.model(CounterModel).find(name) || context.model(CounterModel).create(name);
  entity.times = entity.times + 1;
  entity.update();
  context.disconnect();
};
export const onDecrease = props => (context) => {
  const { name } = props;
  context.connect();
  let entity = context.model(CounterModel).find(name) || context.model(CounterModel).create(name);
  entity.times = entity.times - 1;
  entity.update();
  context.disconnect();
};
