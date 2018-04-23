import React from 'react';
import PropTypes from 'prop-types';

const Cart = props => (
  <div>
    <h3>Your Cart</h3>
    <div>{props.getNodes(props.products)}</div>
    <p>Total: &#36;{props.total}</p>
    <button
      onClick={() => props.onCheckoutClicked(props.products)}
      disabled={props.hasProducts(props.products)}
    >
      Checkout
    </button>
  </div>
);
Cart.defaultProps = {
  products: [],
  total: undefined,
};
Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  getNodes: PropTypes.func.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired,
  hasProducts: PropTypes.func.isRequired,
};

export default Cart;
