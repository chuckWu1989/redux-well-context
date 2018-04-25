import React from 'react';
import createStore, { Context, query } from 'redux-well-context';

const collections = [];

class Model {
  constructor() {
    Object.defineProperties(this, {
      _data: {
        writable: true,
      },
      _test: {
        writable: true,
      },
      data: {
        get: () => this._data,
        set: (value) => { this._data = value; },
        enumerable: true,
        configurable: true,
      },
      test: {
        get: () => this._test,
        set: (value) => { this._test = value; },
        enumerable: true,
      },
    });
  }
}

const store = createStore();
const context = new Context(store.dispatch, store.getState);

context.connect();

const entity = context.model(Model).create('test');

entity.data = 123;

collections.push(`1. The entity is: ${JSON.stringify(entity)}`);

delete entity.data;
entity.test = 456;

collections.push(`2. The entity is: ${JSON.stringify(entity)}`);

collections.push(`3. The test in store before updating: ${query(store.getState()).withId('test')}`);

entity.update();

collections.push(`4. The test in store after updating: ${query(store.getState()).withId('test')}`);

context.disconnect();

const SimpleCase = () => (
  <div>
    {
      collections.map((item, idx) => (
        <div key={idx}>
          {item}
        </div>
      ))
    }
  </div>
);

export default SimpleCase;
