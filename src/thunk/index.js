import Context from '../context';

const createThunkMiddleware = extraArgument => (
  ({ dispatch, getState }) => (
    next => (
      (action) => {
        if (typeof action === 'function') {
          const context = new Context(dispatch, getState);
          return action(dispatch, getState, context, extraArgument);
        }
        return next(action);
      }
    )
  )
);

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
