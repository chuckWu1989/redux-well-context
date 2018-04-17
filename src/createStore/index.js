import { compose, applyMiddleware, createStore as createReduxStore } from 'redux';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from '../reducers';
import thunk from '../thunk';

const createStore = (enhancers = []) => {
  const rootReducer = combineReducers();
  const initialState = Immutable.Map({});
  const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), ...enhancers),
  );
  return store;
};

export default createStore;
