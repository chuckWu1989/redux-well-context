import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Products from '../../routers/ProductsRouter';
import Cart from '../../routers/CartRouter';

class App extends Component {
  componentWillMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <Products />
        <hr/>
        <Cart />
      </div>
    );
  }
}
App.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};

export default App;
