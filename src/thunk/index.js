import Context from '../Context';

export default ({ dispatch, getState }) => (
  next => (
    (action) => {
      if (typeof action === 'function') {
        const context = new Context(dispatch, getState);
        return action(context);
      }
      return next(action);
    }
  )
);
