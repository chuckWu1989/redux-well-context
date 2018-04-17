import { combineReducers as normalCombine } from 'redux';
import { combineReducers as immutableCombine } from 'redux-immutable';
import storeReducer from './storeReducer';
import STORENAME from '../constants/Config';

const combineReducers = (reducers = {}, immutable = true) => {
  const combine = immutable ? immutableCombine : normalCombine;
  return (
    combine({
      [STORENAME]: storeReducer,
      ...reducers,
    })
  );
};

export default combineReducers;
