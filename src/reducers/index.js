import { combineReducers } from "redux-immutable";
import storeReducer from "./storeReducer";

export default combineReducers({
  store: storeReducer
});
