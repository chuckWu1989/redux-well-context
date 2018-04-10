import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { thunk, rootReducer, Context } from "../src";
import Layouts from "./layouts";

const initialState = Immutable.Map();
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, initialState, middleware);

class Model {
  constructor() {
    Object.defineProperties(this, {
      _data: {
        writable: true
      },
      _test: {
        writable: true
      },
      _test2: {
        writable: true
      },
      data: {
        get: () => this._data,
        set: value => (this._data = value),
        enumerable: true,
        configurable: true
      },
      test: {
        get: () => this._test,
        set: value => (this._test = value),
        enumerable: true
      },
      test2: {
        get: () => this._test2,
        set: value => (this._test2 = value),
        enumerable: true
      }
    });
  }
}

// // condition 1
const context = new Context(store.dispatch, store.getState);

context.connect();

const entity = context.model(Model).create("test");

entity.data = 123;
delete entity.data;
console.log("1. ", entity);

entity.data = 123;
entity.test = 456;
console.log("2. ", entity);

entity.update();
entity.test2 = 789;
console.log("3. ", store.getState().getIn(["store", "test"]));
console.log("4. ", entity.find("test"));

entity.update();

context.disconnect();

// // condition 2
context.connect();

const entity2 = context.model(Model).find("test");
console.log("5. ", entity2);

context.disconnect();

const App = () => (
  <Provider store={store}>
    <Layouts />
  </Provider>
);

render(<App />, document.getElementById("root"));
