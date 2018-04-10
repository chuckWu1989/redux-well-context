import Context from '../Context';

export default ({ dispatch, getState }) => (
  next => (
    (action) => {
      if (typeof action === 'function') {
        const context = new Context(dispatch, getState);
        return action(dispatch, getState, context);
      }
      return next(action);
    }
  )
);
