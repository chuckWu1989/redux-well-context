import CounterModel from '../model';

export const onIncrease = props => (dispatch, getState, context) => {
  const { name } = props;
  context.connect();
  const entity = context.model(CounterModel).find(name) || context.model(CounterModel).create(name);
  entity.times += 1;
  entity.update();
  context.disconnect();
};
export const onDecrease = props => (dispatch, getState, context) => {
  const { name } = props;
  context.connect();
  const entity = context.model(CounterModel).find(name) || context.model(CounterModel).create(name);
  entity.times -= 1;
  entity.update();
  context.disconnect();
};