import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Immutable from "immutable";
import thunk from "./thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const initialState = Immutable.Map();
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, initialState, middleware);

// class Model {
//   get data() {
//     return this._data;
//   }
//   set data(payload) {
//     this._data = payload;
//   }
//   get test() {
//     return this._test;
//   }
//   set test(payload) {
//     this._test = payload;
//   }
//   get test2() {
//     return this._test2;
//   }
//   set test2(payload) {
//     this._test2 = payload;
//   }
// }

// // condition 1
// const context = new Context(store.dispatch, store.getState);

// context.connect();

// const entity = context.model(Model).create("test");

// entity.data = 123;
// delete entity.data;
// console.log("1. ", entity);

// entity.data = 123;
// entity.test = 456;
// console.log("2. ", entity);

// entity.update();
// entity.test2 = 789;
// console.log("3. ", store.getState().getIn(["store", "test"]));
// console.log("4. ", context.find("test"));

// entity.update();

// context.disconnect();

// // condition 2
// context.connect();

// const entity2 = context.find("test");
// console.log("5. ", entity2);

// context.disconnect();

const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
);

render(<App />, document.getElementById("root"));
