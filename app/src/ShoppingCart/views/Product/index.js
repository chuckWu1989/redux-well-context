import React from 'react';
import PropTypes from 'prop-types';

const Product = props => (
  <div>
    {props.title} - &#36;{props.price}{props.quantity ? ` x ${props.quantity}` : null}
  </div>
);
Product.defaultProps = {
  quantity: undefined,
};
Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};
