import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux-well-context';
import App from './router';

const store = createStore();

const Main = () => (
  <Provider store={store}>
    <App name="counter" />
  </Provider>
);

render(<Main />, document.getElementById('root'));
