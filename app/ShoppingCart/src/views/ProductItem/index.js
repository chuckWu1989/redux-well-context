import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

const ProductItem = props => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={props.product.title}
      price={props.product.price}
      quantity={props.product.inventory}
    />
    <button
      onClick={props.onAddToCartClicked}
      disabled={props.isDisabled(props.product.inventory)}
    >
      {props.getButtonContent(props.product.inventory)}
    </button>
  </div>
);
ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired,
  getButtonContent: PropTypes.func.isRequired,
};

export default ProductItem;
