

const createStore = (rootReducer, initialState, enhancers = []) => {
  const middleware = [superThunk];
  const composeEnhancers = __DEV__ ? composeWithDevTools : compose;
  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers),
  );
  return store;
};
